export interface Week {
    id: number,
    week_num: number
}

export interface WeekRes {
    success: number,
    data: Week
}

export interface WeekInsertRes {
    message: string,
    success: number
}

