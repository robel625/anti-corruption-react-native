import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { colorsPalette, globalStyles } from "../../styles"
import { BodyText } from "../../Text/Text"
import { StepHeader } from "../StepHeader/StepHeader"
import { useEffect, useState } from "react"
// import { NativeStackNavigationProp } from "@react-navigation/native-stack"
// import { MultiStepFormStackParamList } from "../../../types/Navigation"
// import { MultiStepFormEnums } from "../MultiStepFormEnums"
// import { PlanType } from "../../../types/Plan"
// import { ADDONS, SELECT_PLAN } from "../../../utils/const"
import { ThankYou } from "../../ThankYou/ThankYou"
// import { AddonsType } from "../../../types/Addons"
// import MaterialCommunityIcons from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';

// interface Props {
//     currentStep: number,
//     planType: PlanType,
//     addonsChecked: string[],
//     planSelected: string,
//     formIsSubmit: boolean,
//     togglePlanType: () => void,
//     navigation: NativeStackNavigationProp<MultiStepFormStackParamList, "SelectPlan">,

// }

export function FinishUp({formIsSubmit, locationInfo, officerInfo, subjectBody, personalInfo, handleChangeStep}) {

    const step = 4

    const theme = useTheme();
    const { t } = useTranslation();

    const [selectedFile, setSelectedFile] = useState([]);

    

    useEffect(() => {
        const res = subjectBody.responseFile
       const filename = [];
       for (let i = 0; i < res.length; i++) {
         filename.push(res[i].name);
       }
       setSelectedFile(filename)
    }, [])

    console.log('selectedFile', selectedFile)

    const fileTypeToIcon = {
        pdf: "file-pdf-box",
        doc: "file-word",
        docx: "file-word",
        xls: "file-excel",
        xlsx: "file-excel",
        ppt: "file-powerpoint",
        pptx: "file-powerpoint",
        jpg: "file-image",
        jpeg: "file-image",
        png: "file-image",
        mp4: "television-play",
        txt: "text",
        m4a: "cast-audio",
        // Add more mappings for other file types
      };
    
      const FileIcon = ({ fileName }) => {
        const extension = fileName.split(".").pop().toLowerCase();
        const iconName = fileTypeToIcon[extension];
    
        if (iconName) {
          return <MaterialCommunityIcons name={iconName} size={18} color="black" />;
        } else {
          return;
        }
      };
    // const [planPrice, setPlanPrice] = useState<PlanPricesType>({ monthly: "", yearly: "" })
    // const [addonsChecked, setAddonsChecked] = useState<AddonsType>([])
    // let planPrice = {
    //     monthly: "",
    //     yearly: "",
    // }
    // let addonsChecked: AddonsType = []
    // let totalPrice: { montly: number, yearly: number } = { montly: 0, yearly: 0 }

    // useEffect(() => {
    //     if (props.currentStep === step - 1) {
    //         props.navigation.navigate("PickAddons")
    //     }
        // if (props.currentStep === step + 1) {
        //     props.navigation.navigate("FinishUp")
        // }
    // }, [props.currentStep])

    // SELECT_PLAN.find(p => {
    //     if (p.label === props.planSelected) {
    //         planPrice = {
    //             monthly: `$${p.price.monthly}/mo`,
    //             yearly: `$${p.price.yearly}/yr`,
    //         }
    //         addToTotal(p.price.monthly, p.price.yearly)
    //     }
    // })

    // ADDONS.forEach(a => {
    //     if (props.addonsChecked.includes(a.name)) {
    //         addonsChecked.push({
    //             name: a.name,
    //             additionalPrice: {
    //                 monthly: `+$${a.additionalPrice.monthly}/mo`,
    //                 yearly: `+$${a.additionalPrice.yearly}/yr`,
    //             }
    //         })
    //         addToTotal(a.additionalPrice.monthly, a.additionalPrice.yearly)

    //     }
    // })

    // function addToTotal(monthly: number, yearly: number) {
    //     totalPrice = {
    //         montly: totalPrice.montly + monthly,
    //         yearly: totalPrice.yearly + yearly,
    //     }
    // }

    // // States approach

    // function getPlanPrice() {
    //     SELECT_PLAN.find(p => {
    //         if (p.label === props.planSelected) {
    //             setPlanPrice({
    //                 monthly: `$${p.price.monthly}/mo`,
    //                 yearly: `$${p.price.yearly}/yr`,
    //             })
    //         }
    //     })


    // }

    // function getAddons() {
    //     const addons: AddonsType = []
    //     ADDONS.forEach(a => {
    //         if (props.addonsChecked.includes(a.name)) {
    //             addons.push({
    //                 name: a.name,
    //                 additionalPrice: {
    //                     monthly: `+$${a.additionalPrice.monthly}/mo`,
    //                     yearly: `+$${a.additionalPrice.yearly}/yr`,

    //                 }
    //             })
    //         }
    //     })
    //     setAddonsChecked(addons)

    // }

    // // useEffect(() => {
    // //     getPlanPrice()
    // // }, [props.planType])

    // useEffect(() => {
    //     getPlanPrice()
    //     getAddons()
    // }, [])

    return (
        <>
            <View style={{}}>
                {formIsSubmit ?
                    <ThankYou handleChangeStep={handleChangeStep}/>
                    :
                    <View style={globalStyles.stepSubContainer}>

                        <StepHeader
                            // title="Finishing up"
                            // subtitle="Double-check everything looks OK before confirming."
                            title={t('s5-title')}
                            subtitle={t('s5-description')}
                        />
                        <ScrollView 
                        showsVerticalScrollIndicator={false}
                        // style={{ maxHeight: "85%"}}
                        >

<View style={{ display: "flex",
flexDirection: "row", gap: 10, 
marginTop: 24,
}}>
   {/* <Text style={{fontSize: 14,
   lineHeight: 20,
   fontFamily: FONTFAMILY.poppins_medium, marginTop: 15,
   color: colorsPalette.denim.color}}>Incident happend Date: </Text> */}


   <BodyText size="L" fontWeigth="regular" >{t('Incident_Date')}</BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>{locationInfo.incident_date ? locationInfo.incident_date : "__________________"}</BodyText>
   {/* <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>{locationInfo.incident_date ? locationInfo.incident_date.toISOString().split("T")[0] : "__________________"}</BodyText> */}
</View>

<View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 10,
// white-space: 'nowrap', 
flexWrap: 'wrap',
overflow: 'hidden',
}}>
   <BodyText size="L" fontWeigth="regular" >{t('Incident_location')} </BodyText>
   {/* <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>
    {locationInfo.CSC ? locationInfo.CSC : locationInfo.District ? locationInfo.District
   : locationInfo.Region ? locationInfo.Region : "_______________" }</BodyText> */}
   {/* <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>
    {locationInfo.CSC ? locationInfo.CSC :  "_______________" }</BodyText> */}
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>
   {locationInfo.location ? locationInfo.location : "__________________"}</BodyText>

   <BodyText size="L" fontWeigth="regular" >{t('To which EEU to inform your suggestion')} </BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>
    {locationInfo.CSC ? locationInfo.CSC :  "_______________" }</BodyText>
</View>

{/* name: "",
    position: "",
    phone: "", */}
<BodyText size="L" fontWeigth="bold" customStyle={{ marginTop: 24}}>{t('s2-title')}</BodyText>
<View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 10,
}}>
   <BodyText size="L" fontWeigth="regular" >{t('Name')}</BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>{subjectBody.name || "__________________"}</BodyText>
</View>
<View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 10,
}}>
   <BodyText size="L" fontWeigth="regular" >{t('Phone')}:</BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>{subjectBody.phone || "__________________"}</BodyText>
</View>
<View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 10,
}}>
   <BodyText size="L" fontWeigth="regular" >{t('position')}:</BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>{subjectBody.position || "__________________"}</BodyText>
</View>


{/* subject: "",
    body: "",
    responseFile:[], */}
{/* <View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 24,
}}>
   <BodyText size="L" fontWeigth="regular" >{t("subject")}:</BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }} >{subjectBody.subject || "__________________"}</BodyText>
</View> */}

<View style={{ marginTop: 24,
}}>
   <BodyText size="L" fontWeigth="regular" >{t("body")}:</BodyText>
   <BodyText size="M" fontWeigth="regular" >{subjectBody.body || "__________________"}  </BodyText>
</View>

<View >
<BodyText size="L" fontWeigth="bold" customStyle={{ marginTop: 24 }}>{t("attachments")}</BodyText>
<FlatList
          data={selectedFile}
          showsVerticalScrollIndicator={true}
          renderItem={({ item, index }) => (
            <View
              style={{
                // position: "relative",
                width: "100%",
                paddingHorizontal: 15,
                margin: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: theme.colors.text,
                  padding: 2,
                  paddingLeft: 35,
                  // height: 48,
                  // borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              >
                {item}
              </Text>
               <View
                style={{
                  position: "absolute",
                  left: 20,
                   top: 2,
                  opacity: 0.5,
                }}
              >
                <FileIcon fileName={item} />
              </View>
            </View>
          )}
        />
</View>



{/* <BodyText size="L" fontWeigth="bold" customStyle={{ marginTop: 24 }}>{t('s4-title')}</BodyText>
<View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 10,
}}>
   <BodyText size="L" fontWeigth="regular" >{t('Name')}:</BodyText>
   <BodyText size="L" fontWeigth="bold"  customStyle={{ textDecorationLine: 'underline' }}>{personalInfo.name || "__________________"}</BodyText>
</View>
<View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 10,
}}>
   <BodyText size="L" fontWeigth="regular" >{t('Phone')}:</BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>{personalInfo.phone || "__________________"}</BodyText>
</View>
<View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 10,
}}>
   <BodyText size="L" fontWeigth="regular" >{t('email')}:</BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>{personalInfo.email || "__________________"}</BodyText>
</View>
<View style={{ display: "flex",
flexDirection: "row", alignItems: 'center', gap: 10,
marginTop: 10,
}}>
   <BodyText size="L" fontWeigth="regular" >{t('address')}:</BodyText>
   <BodyText size="L" fontWeigth="bold" customStyle={{ textDecorationLine: 'underline' }}>{personalInfo.address || "__________________"}</BodyText>
</View> */}
</ScrollView>
                        {/* <View style={styles.summary}>
                            <View style={[styles.planTypeContainer, styles.line]}>
                                <View>
                                    <BodyText fontWeigth="medium" customStyle={styles.plan} >{props.planSelected} ({props.planType})</BodyText>
                                    <Pressable onPress={props.togglePlanType}>
                                        <BodyText customStyle={styles.togglePlan}>Change</BodyText>
                                    </Pressable>
                                </View>
                                <BodyText fontWeigth="bold" customStyle={styles.plan}>{props.planType === 'Monthly' ? planPrice.monthly : planPrice.yearly}</BodyText>
                            </View>
                            <View style={styles.separator} />
                            {addonsChecked.map((addon) => {
                                return (
                                    <View style={[styles.addon, styles.line]} key={`addon-${addon.name}`}>
                                        <BodyText customStyle={styles.addonName}>{addon.name}</BodyText>
                                        <BodyText>{props.planType === "Monthly" ? addon.additionalPrice.monthly : addon.additionalPrice.yearly}</BodyText>
                                    </View>
                                )
                            })}
                        </View> */}
                        {/* <View style={[styles.line, styles.total]}>
                            <BodyText>Total (per {props.planType === "Monthly" ? "month" : "year"})</BodyText>
                            <BodyText size="L" fontWeigth="bold" customStyle={styles.totalPrice}>
                                ${props.planType === "Monthly" ? totalPrice.montly.toString() + "/mo" : totalPrice.yearly.toString() + "/yr"}
                            </BodyText>
                        </View> */}
                    </View>
                 } 
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    summary: {
        backgroundColor: colorsPalette.veryLightGrey.color,
        padding: 16,
        marginTop: 22,
    },
    line: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    planTypeContainer: {
        alignItems: "center",
    },
    plan: {
        color: colorsPalette.denim.color,
        borderRadius: 8,
    },
    togglePlan: {
        color: colorsPalette.grey.color,
        paddingTop: 3,
        textDecorationLine: "underline",
    },
    separator: {
        borderColor: colorsPalette.grey.color,
        borderBottomWidth: 1,
        opacity: 0.20,
        marginTop: 12,
    },
    addon: {
        marginTop: 12,
    },
    addonName: {
        color: colorsPalette.grey.color,
    },
    total: {
        marginHorizontal: 16,
        marginTop: 24,
        display: "flex",
        alignItems: "center",
    },
    totalPrice: {
        color: colorsPalette.purple.color,
    }
})
