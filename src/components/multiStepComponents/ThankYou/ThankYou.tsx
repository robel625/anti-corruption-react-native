import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colorsPalette, globalStyles } from '../styles'
import { IconThankYou } from '../../../assets/icons/icons'
import { BodyText, HeaderText } from '../Text/Text'
import { useTranslation } from 'react-i18next';

interface Props {
    handleChangeStep: (step: number, back: boolean) => void,
}

export function ThankYou(props: Props): JSX.Element {

    const { t } = useTranslation();

    return (
        <View style={[globalStyles.stepSubContainer, styles.thankYouContainer]}>
            <IconThankYou />
            <HeaderText customStyle={styles.title}>{t("s6-title")}</HeaderText>
            <BodyText size='L' customStyle={styles.text}>{t("s6-description")}</BodyText>

            <TouchableOpacity  
    // onPress={handleChangeStep(1)}
    onPress={() => props.handleChangeStep(1, false)}
        //   style={{marginTop: 50}}
          >
             <Text style={{marginTop: 80, marginBottom: -50, backgroundColor: "#69BF70", fontWeight: 'bold', fontSize: 15, color: '#FFF',borderRadius: 10, padding:15}}>{t('Add New Case')}</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    thankYouContainer: {
        display: "flex",
        alignItems: "center",
        paddingVertical: 79,
    },
    title: {
        marginTop: 24,
    },
    text: {
        textAlign: "center",
        color: colorsPalette.grey.color,
        marginTop: 9,
    },
})
