import { StyleSheet, View } from 'react-native'
import Button from '../Button/Button'
// import { BTN_ACTION_TYPE } from '../utils/const'
import { colorsPalette } from '../styles'
import { useTranslation } from 'react-i18next';
import { subMinutes } from 'date-fns';


interface Props {
    currentStep: number,
    formIsSubmit: boolean,
    handleChangeStep: (step: number, isBackNavigation: boolean) => void,
}

export default function Footer(props: Props): JSX.Element {

    let buttons: JSX.Element = <></>

    const { t } = useTranslation();

    const BTN_ACTION_TYPE = {
        goBack: t("goBack"),
        nextStep: t("nextStep"),
        submit: t("submit"),
    }

    switch (props.currentStep) {
        case 1:
            buttons = <Button
                type='secondary'
                handlePress={(e) => {
                    props.handleChangeStep(2, false)
                }}
            >{BTN_ACTION_TYPE.nextStep}</Button>
            break

        case 2:
            buttons = <>
                <Button
                    handlePress={(e) => {
                        props.handleChangeStep(1, true)

                    }}
                    type='tiercary'>
                    {BTN_ACTION_TYPE.goBack}
                </Button>
                <Button
                    type='secondary'
                    handlePress={(e) => {
                        props.handleChangeStep(3, false)
                    }}>
                    {BTN_ACTION_TYPE.nextStep}
                </Button>
            </>
            break

        // case 3:
        //     buttons = <>
        //         <Button
        //             handlePress={(e) => {
        //                 props.handleChangeStep(2)

        //             }}
        //             type='tiercary'>
        //             {BTN_ACTION_TYPE.goBack}
        //         </Button>
        //         <Button
        //             type='secondary'
        //             handlePress={(e) => {
        //                 props.handleChangeStep(4)
        //             }}>
        //             {BTN_ACTION_TYPE.nextStep}
        //         </Button>
        //     </>
        //     break

        // case 4:
        //     buttons = <>
        //         <Button
        //             handlePress={(e) => {
        //                 props.handleChangeStep(3)

        //             }}
        //             type='tiercary'>
        //             {BTN_ACTION_TYPE.goBack}
        //         </Button>
        //         <Button
        //             type='secondary'
        //             handlePress={(e) => {
        //                 props.handleChangeStep(5)
        //             }}>
        //             {BTN_ACTION_TYPE.nextStep}
        //         </Button>
        //     </>
        //     break

        // case 5:
        //     buttons = <>
        //         <Button
        //             handlePress={(e) => {
        //                 props.handleChangeStep(4)
        //             }}
        //             type='tiercary'>
        //             {BTN_ACTION_TYPE.goBack}
        //         </Button>
        //         <Button
        //             type='secondary'
        //             handlePress={(e) => {
        //                 props.handleChangeStep(6)
        //             }}>
        //             {BTN_ACTION_TYPE.nextStep}
        //         </Button>
        //     </>
        //     break

        case 3:
            buttons = <>
                <Button
                    handlePress={(e) => {
                        props.handleChangeStep(2, true)
                    }}
                    type='tiercary'>
                    {BTN_ACTION_TYPE.goBack}
                </Button>
                <Button
                    handlePress={(e) => {
                        props.handleChangeStep(4, false)
                    }}>
                    {BTN_ACTION_TYPE.submit}
                </Button>
            </>
            break

        default:
            buttons = <></>
            break
    }

    return (
        <>
            {props.formIsSubmit ?
                <></>
                :
                <View style={[
                    styles.footerContainer,
                    { justifyContent: props.currentStep === 1 ? "flex-end" : "space-between" }
                ]}>
                    {buttons}
                </View>}
        </>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        height: 72,
        backgroundColor: colorsPalette.white.color,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    }
})
