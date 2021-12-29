import {authActionCreators} from "./authReducer/authActionCreators";
import {eventsActionCreators} from "./eventsReducer/eventsActionCreators";

export const allActionCreators = {
  ...authActionCreators,
  ...eventsActionCreators
}
