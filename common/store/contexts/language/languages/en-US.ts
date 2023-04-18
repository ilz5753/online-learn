import { ILanguage } from "../type";

export const en_US: ILanguage = {
    key: "en",
    translation: {
        splash: {
            slogan: `Comfortable study environment`,
        },
        onBoarding: {
            skip: `Skip`,
            screen1: {
                title: `Numerous free trial courses`,
                description: `Free courses for you to find your way to learning`
            },
            screen2: {
                title: `Quick and easy learning`,
                description: `Easy and fast learning at any time to help you improve various skills`
            },
            screen3: {
                title: `Create your own study plan`,
                description: `Study according to the study plan, make study more motivated`
            },
            login: `Log in`,
            signup: `Sign up`
        },
        auth: {
            login: {
                title: `Log In`,
                fields: {
                    email: `Your Email`,
                    password: `Password`,
                    cwp: `Continue with phone`,
                    fp: `Forgot your password?`
                },
                login: `Log in`,
                dhaa: {
                    text: `Don't have an account?`,
                    link: `Sign up`
                },
                or: `or login with`
            },
            signup: {
                title: `Sign Up`,
                subtitle: `Enter your details below & free sign up`,
                fields: {
                    email: `Your Email`,
                    password: `Password`,
                    confirmPassword: `Re Enter Password`,
                    cwp: `Continue with phone`,
                    agreement: `By creating an account you have to agree with our terms & conditions.`
                },
                signup: `Create Account`,
                ahaa: {
                    text: `Already have an account?`,
                    link: `Log in`
                },
                or: `or create with`
            },
            cwf: {
                title: `Continue with Phone`,
                info: `Enter Your Phone Number`,
                continue: `Continue`
            },
            vf: {
                title: `Verify Phone`,
                message: `Code is sent to`,
                drc: {
                    text: `Don't Receive Code?`,
                    link: `Request Code`,
                },
                verify: `Verify and Create Account`,
                resultModals: {
                    success: {
                        title: `Success`,
                        description: `Congratulations, you have completed your registration!`,
                        btnText: `Done`
                    },
                    failure: {
                        title: `Fail`,
                        description: `Unfortunately you entered wrong code.`,
                        btnText: `Try again`
                    }
                }
            },
            keypad: {
                0: `0`,
                1: `1`,
                2: `2`,
                3: `3`,
                4: `4`,
                5: `5`,
                6: `6`,
                7: `7`,
                8: `8`,
                9: `9`,
                del: "DEL",
                "": "",
            }
        },
        main: {
            bottomTabs: {
                Home: `Home`,
                Course: `Course`,
                Search: `Search`,
                Message: `Message`,
                Account: `Account`,
            },
            Home: {
                Summery: {
                    hi: `Hi,`,
                    subtitle: `Let's start learning`,
                    learningPlan: `Learning Plan`,
                },
                MyCourses: {
                    title: `My Courses`,
                    course: {
                        completed: `Completed`
                    }
                },
                CourseDetails: {},
                learnProgress: {
                    title: `Learned today`,
                    link: `My courses`,
                },
                ad: {
                    title: `What do you want to learn today ?`,
                    btnText: `Get Started`
                },
                meetup: {
                    title: `Meetup`,
                    description: `Off-line exchange of learning experiences`
                }
            },
            Course: {
                title: `Course`,
                searchBarBtnText: `Find Course`,
                choiceCourse: {
                    title: `Choice your course`,
                    tabs: {
                        all: `All`,
                        popular: `Popular`,
                        new: `New`,
                    }
                }
            },
            Search: {
                results: `Results`,
                title: `Search`,
                searchBarLabel: `Search Courses`
            },
            Message: {
                title: `notifications`,
                topTab: {
                    message: `message`,
                    notification: `notification`
                },
                message: {
                    template: {
                        status: {
                            on: `Online`,
                            off: `Offline`
                        }
                    }
                },
                notification: {
                    messages: {
                        0: `Successful purchase!`,
                        1: `Congratulations on completing the  ...`,
                        2: `Your course has been updated, you  ...`,
                        3: `Congratulations, you have ...`,
                    }
                }
            },
            Account: {
                title: `Account`,
                favorites: `Favorites`,
                editAccount: `Edit Account`,
                settingsAndPrivacy: `Settings And Privacy`,
                help: `Help`
            },
            topics: {
                language: `Language`,
                painting: `Painting`,
                coding: `Coding`,
                sport: `Sport`,
                visualIdentity: `Visual Identity`,
                writing: `Writing`,
                editing: `Editing`,
                design: `Design`,
                music: `Music`,
                mathematics: `Mathematics`
            },
            filterPage: {
                title: `Search Filter`,
                sections: {
                    categories: `Categories`,
                    price: `Price`,
                    duration: `Duration`
                },
                btns: {
                    clear: `Clear`,
                    applyFilters: `Apply Filters`
                }
            }
        },
        empties: {
            pages: {
                noNetwork: `No Network`,
                noVideos: `No Videos`,
                noProducts: `No Products`,
                noNotifications: `No Notifications`
            },
            noNetwork: {
                btnText: `Try again`,
                title: `No Network!`,
                description: `Please check your internet connection and try again`
            },
            noVideos: {
                btnText: `Search more`,
                title: `No Videos!`,
                description: `Here is no video you want at the moment`
            },
            noProducts: {
                title: `No Products`,
                description: `You don't have any products yet!`
            },
            noNotifications: {
                title: `No Notifications yet!`,
                description: `We'll nofify you once we have something for you`
            },
            title: "Empty Screens",
        },
        timeUnits: {
            d: `Day`,
            day: `Day`,
            days: `Days`,
            h: `Hour`,
            hour: `Hour`,
            hours: `Hours`,
            m: `Minute`,
            minute: `Minute`,
            minutes: `Minutes`,
            s: `Second`,
            second: `Second`,
            seconds: `Seconds`,
        }
    }
}