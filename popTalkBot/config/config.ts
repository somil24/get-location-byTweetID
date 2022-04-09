type CONFIG_OBJECT={
    ENV:string,
    BEARER_TOKEN:string,
    PORT:number,
}

const DEVELOPMENT:CONFIG_OBJECT={
    ENV:"development",
    BEARER_TOKEN:"AAAAAAAAAAAAAAAAAAAAADOEGAEAAAAAwbH7nl%2FSJcoDukxh92DyXdvaj0o%3DM4lkEmkmXnl69sfMp39VUUIlvcFcM5KaE89fkUqz0H4wL8E2sp",
    PORT:5000,
}

const config= (enviroment:string):CONFIG_OBJECT=>{
    const obj= DEVELOPMENT;
    return obj;
}

export default config;
