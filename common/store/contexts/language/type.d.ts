import { TFunc } from "../../../../type";

interface IOnBoardingScreen {
    title: string;
    description: string;
}
interface IEmptyScreen extends IOnBoardingScreen {
    btnText?: string;
}
interface IAuthLinkBtn {
    text: string;
    link: string;
}
interface IAuthVerifyResultModal {
    title: string;
    description: string;
    btnText: string;
}
interface IMainCoursesFilterPageSection {
    title: string;
    options: Record<string, string>;
}
export type TLanguageKey = "en" | "fa";
export type TLanguage = {
    splash: {
        slogan: string;
    };
    onBoarding: {
        skip: string;
        screen1: IOnBoardingScreen;
        screen2: IOnBoardingScreen;
        screen3: IOnBoardingScreen;
        login: string;
        signup: string;
    };
    auth: {
        login: {
            title: string;
            fields: {
                email: string;
                password: string;
                // continue with phone
                cwp: string;
                // forgot password
                fp: string;
            };
            login: string;
            // don't have an account?
            dhaa: IAuthLinkBtn;
            or: string;
        };
        signup: {
            title: string;
            subtitle: string;
            fields: {
                email: string;
                password: string;
                confirmPassword: string;
                // continue with phone
                cwp: string;
                agreement: string;
            };
            signup: string;
            // already have an account?
            ahaa: IAuthLinkBtn;
            or: string;
        };
        // continue with phone
        cwf: {
            title: string;
            info: string;
            continue: string;
        };
        // verify phone
        vf: {
            title: string;
            message: string;
            // don't receive code
            drc: IAuthLinkBtn;
            verify: string;
            resultModals: {
                success: IAuthVerifyResultModal;
                failure: IAuthVerifyResultModal;
            }
        };
        keypad: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            del: string;
            "": string;
        };
    },
    main: {
        bottomTabs: {
            Home: string;
            Course: string;
            Search: string;
            Message: string;
            Account: string;
        },
        Home: {
            Summery: {
                hi: string,
                subtitle: string;
                learningPlan: string;
            },
            learnProgress: {
                title: string;
                link: string;
            };
            ad: {
                title: string;
                btnText: string;
            };
            meetup: {
                title: string;
                description: string;
            };
            MyCourses: {
                title: string;
                course: {
                    completed: string;
                }
            },
            CourseDetails: {},
        },
        Course: {
            title: string;
            searchBarBtnText: string;
            choiceCourse: {
                title: string;
                tabs: {
                    all: string;
                    popular: string;
                    new: string;
                }
            }
        },
        topics: {
            language: string;
            painting: string;
            coding: string;
            sport: string;
            visualIdentity: string;
            writing: string;
            editing: string;
            design: string;
            music: string;
            mathematics: string;
        };
        filterPage: {
            title: string;
            sections: {
                categories: string;
                price: string;
                duration: string;
            };
            btns: {
                clear: string;
                applyFilters: string;
            }
        };
        Search: {
            title: string;
            searchBarLabel: string;
            results: string;
        },
        Message: {
            title: string;
            topTab: {
                message: string;
                notification: string;
            };
            message: {
                template: {
                    status: {
                        on: string;
                        off: string;
                    };
                }
            };
            notification: {
                messages: Record<string, string>;
            };
        },
        Account: {
            title: string;
            favorites: string;
            editAccount: string;
            settingsAndPrivacy: string;
            help: string;
        },
    },
    empties: {
        title: string;
        pages: {
            noNetwork: string;
            noVideos: string;
            noProducts: string;
            noNotifications: string;
        },
        noNetwork: IEmptyScreen;
        noVideos: IEmptyScreen;
        noProducts: IEmptyScreen;
        noNotifications: IEmptyScreen;
    },
    timeUnits: {
        d: string;
        day: string;
        days: string;
        h: string;
        hour: string;
        hours: string;
        m: string;
        minute: string;
        minutes: string;
        s: string;
        second: string;
        seconds: string;
    }
}
export interface ILanguage {
    key: TLanguageKey;
    translation: TLanguage;
}
export interface ILanguageContext {
    language: ILanguage;
    setLanguageKey: TFunc<TLanguageKey>
}
export type TI18nLanguage = Record<TLanguageKey, TLanguage>;