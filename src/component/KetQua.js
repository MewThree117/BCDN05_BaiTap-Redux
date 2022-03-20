import React, { Component } from 'react'
import { connect } from 'react-redux'


export class KetQua extends Component {
    render() {
        let { soVanThang, soVanHoa, tongSoVan } = this.props.gameOanTuTi;
        return (
            <div>
                <p className='title'>I'm iron man, i love you 3000 !</p>
                <p>Số ván thắng: <span>{soVanThang}</span></p>
                <p>Số ván hòa: <span>{soVanHoa}</span></p>
                <p>Số ván chơi: <span>{tongSoVan}</span></p>
                <button className='btn btn-success' onClick={() => {
                    let action = {
                        type: 'PLAY_GAME'
                    }
                    this.props.dispatch(action)
                }}>Play game</button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gameOanTuTi: rootReducer.gameReducer
    }
}

export default connect(mapStateToProps)(KetQua)
