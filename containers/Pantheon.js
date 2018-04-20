import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {
    moins_classe, moins_ilios, moins_ishtar, moins_kagaku, moins_senso, moins_shanz, moins_sphyrivarys, moins_surnoss,
    moins_tiara,
    moins_umbra,
    moins_vitalia,
    moins_yamades,
    plus_classe, plus_ilios,
    plus_ishtar,
    plus_kagaku,
    plus_senso,
    plus_shanz, plus_sphyrivarys, plus_surnoss, plus_tiara, plus_umbra, plus_vitalia, plus_yamades
} from "../action/PantheonAction";
import PantheonReducer from "../reducers/PantheonReducer";
import * as styles from "react-native";

class PantheonComponents extends React.Component
{
    render()
    {
        return (
            // JSX render
            <ScrollView>
                <View>
                    <Text>Pantheon</Text>
                </View>
                <View>
                    <Text>Classe :</Text>
                    <Button
                        title="+"
                        color="#ff0000"
                        onPress={() => {
                            if (this.props.classe < 10)
                            {
                                this.props.plusClasse();
                            }
                        }}
                    />
                    <Text>{this.props.classe} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#ff0000"
                        onPress={() => {
                            if (this.props.classe > 0)
                            {
                                this.props.moinsClasse();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Shanz :</Text>
                    <Button
                        title="+"
                        color="#0087ff"
                        onPress={() => {
                            if (this.props.shanz < 10)
                            {
                                this.props.plusShanz();
                            }
                        }}
                    />
                    <Text>{this.props.shanz} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#0087ff"
                        onPress={() => {
                            if (this.props.shanz > 0)
                            {
                                this.props.moinsShanz();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Senso :</Text>
                    <Button
                        title="+"
                        color="#ff9000"
                        onPress={() => {
                            if (this.props.senso < 10)
                            {
                                this.props.plusSenso();
                            }
                        }}
                    />
                    <Text>{this.props.senso} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#ff9000"
                        onPress={() => {
                            if (this.props.senso > 0)
                            {
                                this.props.moinsSenso();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Kagaku :</Text>
                    <Button
                        title="+"
                        color="#d9d9d9"
                        onPress={() => {
                            if (this.props.kagaku < 10)
                            {
                                this.props.plusKagaku();
                            }
                        }}
                    />
                    <Text>{this.props.kagaku} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#d9d9d9"
                        onPress={() => {
                            if (this.props.kagaku > 0)
                            {
                                this.props.moinsKagaku();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Tiara :</Text>
                    <Button
                        title="+"
                        color="#009933"
                        onPress={() => {
                            if (this.props.tiara < 10)
                            {
                                this.props.plusTiara();
                            }
                        }}
                    />
                    <Text>{this.props.tiara} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#009933"
                        onPress={() => {
                            if (this.props.tiara > 0)
                            {
                                this.props.moinsTiara();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Sphyrivarys :</Text>
                    <Button
                        title="+"
                        color="#996800"
                        onPress={() => {
                            if (this.props.sphyrivarys < 10)
                            {
                                this.props.plusSphyrivarys();
                            }
                        }}
                    />
                    <Text>{this.props.sphyrivarys} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#996800"
                        onPress={() => {
                            if (this.props.sphyrivarys > 0)
                            {
                                this.props.moinsSphyrivarys();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Ishtar :</Text>
                    <Button
                        title="+"
                        color="#ff00ff"
                        onPress={() => {
                            if (this.props.ishtar < 10)
                            {
                                this.props.plusIshtar();
                            }
                        }}
                    />
                    <Text>{this.props.ishtar} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#ff00ff"
                        onPress={() => {
                            if (this.props.ishtar > 0)
                            {
                                this.props.moinsIshtar();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Umbra :</Text>
                        <Button
                            title="+"
                            color="#000000"
                            onPress={() => {
                            if (this.props.umbra < 10)
                            {
                                this.props.plusUmbra();
                            }
                        }}
                        />
                        <Text>{this.props.umbra} {this.props.retour}</Text>
                        <Button
                            title="-"
                            color="#000000"
                            onPress={() => {
                            if (this.props.umbra > 0)
                            {
                                this.props.moinsUmbra();
                            }
                        }}
                        />
                </View>
                <Text/>
                <View>
                    <Text>Yamades :</Text>
                    <Button
                        title="+"
                        color="#730099"
                        onPress={() => {
                            if (this.props.yamades < 10)
                            {
                                this.props.plusYamades();
                            }
                        }}
                    />
                    <Text>{this.props.yamades} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#730099"
                        onPress={() => {
                            if (this.props.yamades > 0)
                            {
                                this.props.moinsYamades();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Vitalia :</Text>
                    <Button
                        title="+"
                        color="#66ff33"
                        onPress={() => {
                            if (this.props.vitalia < 10)
                            {
                                this.props.plusVitalia();
                            }
                        }}
                    />
                    <Text>{this.props.vitalia} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#66ff33"
                        onPress={() => {
                            if (this.props.vitalia > 0)
                            {
                                this.props.moinsVitalia();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Ilios :</Text>
                    <Button
                        title="+"
                        color="#ffff00"
                        onPress={() => {
                            if (this.props.ilios < 10)
                            {
                                this.props.plusIlios();
                            }
                        }}
                    />
                    <Text>{this.props.ilios} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#ffff00"
                        onPress={() => {
                            if (this.props.ilios > 0)
                            {
                                this.props.moinsIlios();
                            }
                        }}
                    />
                </View>
                <Text/>
                <View>
                    <Text>Surnoss :</Text>
                    <Button
                        title="+"
                        color="#0033cc"
                        onPress={() => {
                            if (this.props.surnoss < 10)
                            {
                                this.props.plusSurnoss();
                            }
                        }}
                    />
                    <Text>{this.props.surnoss} {this.props.retour}</Text>
                    <Button
                        title="-"
                        color="#0033cc"
                        onPress={() => {
                            if (this.props.surnoss > 0)
                            {
                                this.props.moinsSurnoss();
                            }
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = ({ PantheonReducer }) => (
    {
        //object: variable.object,
        classe: PantheonReducer.classe,
        shanz: PantheonReducer.shanz,
        senso: PantheonReducer.senso,
        kagaku: PantheonReducer.kagaku,
        tiara: PantheonReducer.tiara,
        sphyrivarys: PantheonReducer.sphyrivarys,
        ishtar: PantheonReducer.ishtar,
        umbra: PantheonReducer.umbra,
        yamades: PantheonReducer.yamades,
        vitalia: PantheonReducer.vitalia,
        ilios: PantheonReducer.ilios,
        surnoss: PantheonReducer.surnoss,
        //...PantheonReducer,
    }
);

const mapDispatchToProps = (dispatch) => {

        return {

            plusClasse: () => dispatch(plus_classe()),
            moinsClasse: () => dispatch(moins_classe()),
            plusShanz: () => dispatch(plus_shanz()),
            moinsShanz: () => dispatch(moins_shanz()),
            plusSenso: () => dispatch(plus_senso()),
            moinsSenso: () => dispatch(moins_senso()),
            plusKagaku: () => dispatch(plus_kagaku()),
            moinsKagaku: () => dispatch(moins_kagaku()),
            plusTiara: () => dispatch(plus_tiara()),
            moinsTiara: () => dispatch(moins_tiara()),
            plusSphyrivarys: () => dispatch(plus_sphyrivarys()),
            moinsSphyrivarys: () => dispatch(moins_sphyrivarys()),
            plusIshtar: () => dispatch(plus_ishtar()),
            moinsIshtar: () => dispatch(moins_ishtar()),
            plusUmbra: () => dispatch(plus_umbra()),
            moinsUmbra: () => dispatch(moins_umbra()),
            plusYamades: () => dispatch(plus_yamades()),
            moinsYamades: () => dispatch(moins_yamades()),
            plusVitalia: () => dispatch(plus_vitalia()),
            moinsVitalia: () => dispatch(moins_vitalia()),
            plusIlios: () => dispatch(plus_ilios()),
            moinsIlios: () => dispatch(moins_ilios()),
            plusSurnoss: () => dispatch(plus_surnoss()),
            moinsSurnoss: () => dispatch(moins_surnoss()),
        };

};

export default connect(mapStateToProps, mapDispatchToProps)(PantheonComponents);