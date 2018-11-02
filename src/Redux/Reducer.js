import { c } from './Actions';

export function reducer(oldState, action) {

    switch (action.type) {

        case c.CHANGE_ACTIVE_BOXES: {
            const updatedState = {...oldState, activeCheckBoxes: {
                mobile: action.newValues.mobile,
                tablet: action.newValues.tablet,
                desktop: action.newValues.desktop,
            }};
            return updatedState;
        }
  

        default:
            if (!!oldState) {
                return oldState;
            };
            return {
                activeCheckBoxes: {
                    mobile: false,
                    tablet: false, 
                    desktop: false,
                }
            };
    }
};