import React from 'react'
import { Divider, Grid, Image, Transition } from 'semantic-ui-react'
import img from './nuutila.gif'

const Text = () => {
    return(
        <div>
            Nuutila sijaitsee Jokioisten kunnassa Niemen kylässä Loimijoen rannalla.
            Nuutilan historiaa on Hannu Haapanen selvittänyt aina 1630-luvulle asti,
            jolloin Jokioisten Kartanon maakirjasta löytyy maininta Cnutilasta perintörälssitalona. 1864 talon nimenä on Knuutila.

            <Divider />

            Vuodesta 1912 tilaa isännöi Hjalmar Haapanen,
            joka oli kotoisin Kuusjoen Kanungilta ja oli Maarit Kolin isoisän veli.
            1919 tila sai torpparilain perusteella itsenäisyyden ja tilan nimi muuttui Nuutilaksi.

            <Divider />

            Haapasen kuoltua tilaa hallinnoi perikunta ja tilan nimi muuttui Uusitaloksi.
            1975 Hjalmar Haapasen veljenpoika Hannu Haapanen Kuusjoen Kanungilta osti tilan vaimonsa Sirkka Haapasen kanssa.
            He palauttivat tilan nimeksi Nuutilan 1993.

            <Divider />

            Tila toimi Haapasten sivutilana,
            ja oli asumaton vuodesta 1967 aina vuoteen 2006 asti,
            jolloin tilan ostivat Haapasten tytär Maarit Koli miehensä Markku Kolin kanssa.
            Kolit muuttivat tilalle asumaan 2006 kolmen lapsensa kanssa.

            <Divider />

            Nuutilan pihamiljöö on säilynyt vuosikymmeniä lähes muuttumattomana,
            ja se on luokiteltu Jokioisten kunnassa rakennushistoriallisesti arvokkaaksi kohteeksi.
            1967-2006 päärakennukseen ei tehty muita merkittäviä remontteja,
            kuin ruokakomeron muuttaminen sisävessaksi, ja suihkutilaksi.
            Maarit ja Markku Koli ovat aloittaneet päärakennuksen ja ulkorakennusten kunnostamisen vanhaa kunnioittaen ja vaalien.
        </div>
    )
}

class Historia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          visible: false
        }
    }

    componentDidMount(){
        this.setState({visible: true})
    }

    render(){
        return(
            <Transition.Group animation={'slide right'} duration={1000} >
            {this.state.visible &&
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                            <Text />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src={img} circular />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            }
            </Transition.Group>
        )
    }
}

export default Historia