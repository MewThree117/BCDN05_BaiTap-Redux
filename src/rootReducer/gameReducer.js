let gameOanTuTi = {
    banChon: { hinh: './image/keo.png', loai: 'keo' },
    computer: { hinh: './image/keo.png', loai: 'keo' },
    soVanThang: 0,
    soVanHoa: 0,
    tongSoVan: 0,
    oanTuTi: [
        { hinh: './image/keo.png', loai: 'keo' },
        { hinh: './image/bua.png', loai: 'bua' },
        { hinh: './image/bao.png', loai: 'bao' },
    ]
}

export const gameReducer = (state = gameOanTuTi, action) => {
    switch (action.type) {
        case 'CHON_LOAI': {
            state.banChon = action.chon;
            return { ...state }
        }

        case 'PLAY_GAME': {
            let computerNew = state.oanTuTi[Math.floor(Math.random() * 3)];
            state.computer = computerNew;
            let type_player = state.banChon.loai;
            let type_computer = state.computer.loai;
            if (type_player === 'keo' && type_computer === 'bao' ||
                type_player === 'bao' && type_computer === 'bua' ||
                type_player === 'bua' && type_computer === 'keo') {
                state.soVanThang += 1
            } else if (
                type_player === 'keo' && type_computer === 'keo' ||
                type_player === 'bao' && type_computer === 'bao' ||
                type_player === 'bua' && type_computer === 'bua'
            ) { state.soVanHoa += 1 }

            state.tongSoVan += 1
        }

            return { ...state }

        default: return state;
    }
}