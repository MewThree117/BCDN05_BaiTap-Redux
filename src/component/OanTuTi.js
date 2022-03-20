import React, { Component } from 'react'
import KetQua from './KetQua'
import { connect } from 'react-redux'

export class OanTuTi extends Component {
    render() {
        let { banChon, oanTuTi, computer } = this.props.gameOanTuTi;
        return (
            <div className='row'>
                <div className="col-4">
                    <div className="your__choose">
                        <img src={banChon.hinh} className='your__choose__img' alt="" />
                    </div>
                    <div className="player">
                        <img src="./image/player.png" className='player__img' alt="" />
                    </div>
                    <div className="choose">
                        {oanTuTi.map((item) => {
                            return <button key={item.loai} onClick={() => {
                                let action = {
                                    type: 'CHON_LOAI',
                                    chon: item,
                                }
                                this.props.dispatch(action)
                            }}>
                                <img src={item.hinh} className='choose__img' alt="" />
                            </button>
                        })}
                    </div>
                </div>
                <div className="col-4 my-auto result">
                    <KetQua />
                </div>
                <div className="col-4">
                    <div className="your__choose">
                        <img src={computer.hinh} className='your__choose__img' alt="" />
                    </div>
                    <div className="player">
                        <img src="./image/playerComputer.png" className='player__img' alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gameOanTuTi: rootReducer.gameReducer
    }
}

export default connect(mapStateToProps)(OanTuTi)
