
const self = {
    url: '',
    utm_source: '',
    mobile: false,
    browserName: null,
    referrer: '',
    visitor: '',
    mobileLists: [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ],
    getBrowser:(agent) =>{
        switch (true) {
            case agent.indexOf("edge") > -1: return "edge";
            case agent.indexOf("edg") > -1: return "chromium based edge (dev or canary)";
            case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
            case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
            case agent.indexOf("trident") > -1: return "ie";
            case agent.indexOf("firefox") > -1: return "firefox";
            case agent.indexOf("safari") > -1: return "safari";
            default: return "other";
        }
    },
    getUTMS: () =>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams ? urlParams.get('utm_source'): '';
    },
    isMobile: () =>{
        return self.mobileLists.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    },
    checkLocalStorage:()=>{
        var isKeyExists = localStorage.getItem("demo");
        if(!isKeyExists){
            localStorage.setItem("demo", true);
            return false;
        }
        return true;
    },
    init: async () => {
        // mocking browser
        self.referrer = document.referrer; 
        self.mobile= self.isMobile()
        self.browserName= self.getBrowser(window.navigator.userAgent.toLowerCase());
        self.utm_source = self.getUTMS();
        self.visitor = self.checkLocalStorage();
        console.log(`
        referrer: ${self.referrer}\n
        mobile: ${self.mobile}\n
        browser Name: ${self.browserName}\n
        utm_source: ${self.utm_source }\n
        visitor: ${self.visitor ? 'Old': 'New'}
        `)
    },

}


export default self;