import moment, {Moment} from "moment";

export const validatorIsDataAfter = (message: string) => ({
  validator(_: any, value: Moment){
    if (value.isSameOrAfter(moment())) {
      return Promise.resolve()
    }
    return Promise.reject(new Error(message))
  }
})
