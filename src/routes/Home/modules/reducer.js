/**
 * Created by ZhouYinian on 2017/4/10.
 */

export const CSS_TEXT = 'CSS_TEXT';

export const showText = text=>({
    type: 'CSS_TEXT',
    text
});

export const ACTION_HANDLERS = {
    [CSS_TEXT]: (state, action)=> {
        return ({...state, CssText: action.text})
    },

}


const initialState = {
    CssText: '',
}
export const cssText = (state = initialState, action)=> {
    const handle = ACTION_HANDLERS[action.type];
    return handle ? handle(state, action) : state
}