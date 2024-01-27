export default interface Denunciation {
  userInformation:{
    firstName: string,
    secondName: string,
    middleName: string,
    phone: string,
    email: string,
  },
  event: {
    typeEvent: string,
    textEvent: string,
    imageEvent: string[],
  },
}