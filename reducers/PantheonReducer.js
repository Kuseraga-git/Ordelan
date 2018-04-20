// type actions
// import { /* variable type */ } from '../types/PantheonTypes';

// initialState important !
const initialState = {
    classe: 0,
    shanz: 0,
    senso: 0,
    kagaku: 0,
    tiara: 0,
    sphyrivarys: 0,
    ishtar: 0,
    umbra: 0,
    yamades: 0,
    vitalia: 0,
    ilios: 0,
    surnoss: 0,
};

// reducers switch case
const PantheonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS_CLASSE':
            return {
                classe: state.classe + 1,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_CLASSE':
            return {
                classe: state.classe - 1,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_SHANZ':
            return {
                shanz: state.shanz + 1,
                classe: state.classe,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_SHANZ':
            return {
                shanz: state.shanz - 1,
                classe: state.classe,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_SENSO':
            return {
                senso: state.senso + 1,
                classe: state.classe,
                shanz: state.shanz,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_SENSO':
            return {
                senso: state.senso - 1,
                classe: state.classe,
                shanz: state.shanz,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_KAGAKU':
            return {
                kagaku: state.kagaku + 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_KAGAKU':
            return {
                kagaku: state.kagaku - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_TIARA':
            return {
                tiara: state.tiara + 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_TIARA':
            return {
                tiara: state.tiara - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_SPHYRIVARYS':
            return {
                sphyrivarys: state.sphyrivarys + 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_SPHYRIVARYS':
            return {
                sphyrivarys: state.sphyrivarys - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_ISHTAR':
        return {
            ishtar: state.ishtar + 1,
            classe: state.classe,
            shanz: state.shanz,
            senso: state.senso,
            kagaku: state.kagaku,
            tiara: state.tiara,
            sphyrivarys: state.sphyrivarys,
            umbra: state.umbra,
            yamades: state.yamades,
            vitalia: state.vitalia,
            ilios: state.ilios,
            surnoss: state.yamades,
        };
        case 'MOINS_ISHTAR':
            return {
                ishtar: state.ishtar - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_UMBRA':
            return {
                umbra: state.umbra + 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_UMBRA':
            return {
                umbra: state.umbra - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_YAMADES':
            return {
                yamades: state.yamades + 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_YAMADES':
            return {
                yamades: state.yamades - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                vitalia: state.vitalia,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_VITALIA':
            return {
                vitalia: state.vitalia + 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'MOINS_VITALIA':
            return {
                vitalia: state.vitalia - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                ilios: state.ilios,
                surnoss: state.yamades,
            };
        case 'PLUS_ILIOS':
            return {
                ilios: state.ilios + 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                surnoss: state.yamades,
            };
        case 'MOINS_ILIOS':
            return {
                ilios: state.ilios - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                surnoss: state.yamades,
            };
        case 'PLUS_SURNOSS':
            return {
                surnoss: state.surnoss + 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
            };
        case 'MOINS_SURNOSS':
            return {
                surnoss: state.surnoss - 1,
                classe: state.classe,
                shanz: state.shanz,
                senso: state.senso,
                kagaku: state.kagaku,
                tiara: state.tiara,
                sphyrivarys: state.sphyrivarys,
                ishtar: state.ishtar,
                umbra: state.umbra,
                yamades: state.yamades,
                vitalia: state.vitalia,
                ilios: state.ilios,
            };
        default:
            return state;
    }
};

export default PantheonReducer;
