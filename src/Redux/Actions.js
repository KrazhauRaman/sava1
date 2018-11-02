//типы забиты в константы, чтобы труднее было ошибиться при вводе 
export const c = {
    CHANGE_ACTIVE_BOXES: "CHANGE_ACTIVE_BOXES",

};

export const changeActiveBoxes = (newValues) => {
    return {
        type: c.CHANGE_ACTIVE_BOXES,
        newValues: newValues,
    };
};


