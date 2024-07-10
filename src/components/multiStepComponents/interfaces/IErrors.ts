
export interface ISelectPlanError {
    plan?: string,
}

export interface IPersonalInfoErrors {
    [key: string]: string,
}

export interface ILocationInfoErrors {
    [key: string]: string | string[];
}
