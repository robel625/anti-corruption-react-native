// import { IconAdvanced, IconArcade, IconPro } from "../assets/icons/icons";
// import { IBtnActionType } from "../interfaces/IBtnActionType"
// import { IFormInput } from "../interfaces/IFormInput"

/**
 * Regex
 */
export const REGEX_NAME = /^[a-zA-ZÀ-ÖØ-öø-ÿ\u0300-\u036f]+([-\s'][a-zA-ZÀ-ÖØ-öø-ÿ\u0300-\u036f]+)*\s[a-zA-ZÀ-ÖØ-öø-ÿ\u0300-\u036f]+([-\s'][a-zA-ZÀ-ÖØ-öø-ÿ\u0300-\u036f]+)*$/ // Regex that match "name lastname" with accents, dash, etc... Source : ChatGPT 🤖👀
export const REGEX_EMAIL = /^\s*(?:\+\d{1,3}\s*)?(?:\(\d{1,3}\)\s*)?[\w.-]*\w@(?:[\w-]+\.)+\w{2,}\s*$/
export const REGEX_PHONE = /^\s*(?:\+\d{1,3}\s*)?(?:\(\d{1,3}\)\s*)?\d(?:[\s-]*\d){6,14}$/;

/**
 * Error messages
 */
export const ERROR_FORMAT_INVALID = "The format is not correct"
export const ERROR_FIELD_REQUIRED = "This field is required"
export const ERROR_SELECT_PLAN = "Select a plan"

export const BTN_ACTION_TYPE = {
    goBack: "Go Back",
    nextStep: "Next Step",
    confirm: "Confirm",
}

export const PERSONAL_INFO_INPUTS = [
    {
        name: "name",
        label: "Name",
        placeHolder: "e.g. Abebe Kebede",
        keyboardType: "default",
        maxLength: 40
    },
    {
        name: "email",
        label: "Email Address",
        placeHolder: "e.g. abebe@gmail.com",
        keyboardType: "email-address",
        maxLength: 50,
        autoCapitalize: "none",
        autoCorrect: false,
    },
    {
        name: "address",
        label: "Address",
        placeHolder: "address",
        keyboardType: "default",
        maxLength: 200
    },
    {
        name: "phone",
        label: "Phone Number",
        placeHolder: "e.g. +251 934 567 890",
        keyboardType: "numeric",
        maxLength: 12,
    },
]

export const SubjectBody_INPUTS = [
    {
        name: "subject",
        label: "Subject",
        placeHolder: "write a title",
        keyboardType: "default",
        maxLength: 400
    },
    {
        name: "body",
        label: "Body",
        placeHolder: "write a Body",
        keyboardType: "default",
        maxLength: 10000
    },
]

export const theme = {
    dark: false,
    colors: {
        primary: "",
        background: "transparent",
        card: "",
        text: "",
        border: "",
        notification: "",
    }
}


export const OFFICER_INFO_INPUTS = [
    {
        name: "name",
        label: "Name",
        placeHolder: "e.g. Abebe Kebede",
        keyboardType: "default",
        maxLength: 40
    },
    {
        name: "position",
        label: "Office status (position)",
        placeHolder: "position",
        keyboardType: "default",
        maxLength: 200
    },
    {
        name: "phone",
        label: "Phone Number",
        placeHolder: "e.g. +251 934 567 890",
        keyboardType: "numeric",
        maxLength: 12,
    },
]

// export const SELECT_PLAN = [
//     {
//         label: "Arcade",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         logo: <IconArcade />,
//     },
//     {
//         label: "Advanced",
//         price: {
//             monthly: 12,
//             yearly: 120,
//         },
//         logo: <IconAdvanced />,
//     },
//     {
//         label: "Pro",
//         price: {
//             monthly: 15,
//             yearly: 150,
//         },
//         logo: <IconPro />,
//     },
// ]

// export const ADDONS = [
//     {
//         name: "Online service",
//         description: "Access to multiplayer games",
//         additionalPrice: {
//             monthly: 1,
//             yearly: 10,
//         },
//     },
//     {
//         name: "Larger storage",
//         description: "Extra 1TB of cloud save",
//         additionalPrice: {
//             monthly: 2,
//             yearly: 20,
//         },
//     },
//     {
//         name: "Customizable profile",
//         description: "Custom theme on your profile",
//         additionalPrice: {
//             monthly: 2,
//             yearly: 20,
//         },
//     },
// ]