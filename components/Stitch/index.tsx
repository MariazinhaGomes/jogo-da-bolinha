import {View, Image} from 'react-native'
import {styles} from './styles'

type Props = {
  posX: number
}

export function Stitch({posX}: Props){
  return(
    <View style={[styles.container, {bottom:posX}]}>
     <Image source={require('./styti-removebg-preview.png')} style={{width:60, height:70, marginTop:-100,}}/>
    </View>
  )
}