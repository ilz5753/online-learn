import { ILanguage } from "../type";
export const fa_IR: ILanguage = {
    key: "fa",
    translation: {
        splash: {
            slogan: `محیط مطالعه راحت`,
        },
        onBoarding: {
            skip: `رد کردن`,
            screen1: {
                title: `دوره های آزمایشی رایگان متعدد`,
                description: `دوره های رایگان برای شما تا راه خود را برای یادگیری پیدا کنید`
            },
            screen2: {
                title: `یادگیری سریع و آسان`,
                description: `یادگیری آسان و سریع در هر زمان برای کمک به شما در بهبود مهارت های مختلف`
            },
            screen3: {
                title: `برنامه مطالعاتی خود را ایجاد کنید`,
                description: `طبق برنامه مطالعه مطالعه کنید، انگیزه مطالعه را بیشتر کنید`
            },
            login: `ورود`,
            signup: `ثبت نام`
        },
        auth: {
            login: {
                title: `ورود`,
                fields: {
                    email: `ایمیل`,
                    password: `رمز عبور`,
                    cwp: `ادامه دادن با شماره`,
                    fp: `رمز خود را فراموش کرده اید؟`
                },
                login: `ورود`,
                dhaa: {
                    text: `حساب کاربری ندارید؟`,
                    link: `ساختن حساب`
                },
                or: `یا ورود کنید توسط`
            },
            signup: {
                title: `ساختن حساب`,
                subtitle: `اطلاعات خود را در زیر وارد کنید و یک حساب رایگان بسازید`,
                fields: {
                    email: `ایمیل`,
                    password: `رمز عبور`,
                    confirmPassword: `تایید رمز عبور`,
                    cwp: `ادامه دادن با شماره`,
                    agreement: `با ایجاد یک حساب کاربری باید با شرایط و ضوابط ما موافقت کنید.`
                },
                signup: `ایجاد حساب کاربری`,
                ahaa: {
                    text: `حساب کاربری دارید؟`,
                    link: `وارد شوید`
                },
                or: `یا حساب جدید بسازید با`
            },
            cwf: {
                title: `ادامه دادن با شماره`,
                info: `شماره همراه خود را وارد کنید`,
                continue: `ادامه`
            },
            vf: {
                title: `تایید شماره همراه`,
                message: `کد تایید ارسال شده است به`,
                drc: {
                    text: `کدی دریافت نکرده اید؟`,
                    link: `درخواست کد`,
                },
                verify: `تایید کردن و ایجاد حساب کاربری`,
                resultModals: {
                    success: {
                        title: `موفقیت`,
                        description: `تبریک می گویم، شما ثبت نام خود را تکمیل کردید!`,
                        btnText: `انجام شد`
                    },
                    failure: {
                        title: `خطا`,
                        description: `متاسفانه کد را اشتباه وارد کردید.`,
                        btnText: `دوباره تلاش کنید`
                    }
                }
            },
            keypad: {
                0: `۰`,
                1: `۱`,
                2: `۲`,
                3: `۳`,
                4: `۴`,
                5: `۵`,
                6: `۶`,
                7: `۷`,
                8: `۸`,
                9: `۹`,
                del: "DEL",
                "": ""
            }
        },
        main: {
            bottomTabs: {
                Home: `خانه`,
                Course: `دوره`,
                Search: `جستجو`,
                Message: `پیام`,
                Account: `حساب کاربری`,
            },
            Home: {
                Summery: {
                    hi: `سلام، `,
                    subtitle: `بیایید شروع به یادگیری کنیم`,
                    learningPlan: `طرح یادگیری`,
                },
                MyCourses: {
                    title: `دوره های من`,
                    course: {
                        completed: `انجام شده`
                    }
                },
                CourseDetails: {},
                learnProgress: {
                    title: `امروز یاد گرفتید`,
                    link: `دوره های من`,
                },
                ad: {
                    title: `امروز چه چیزی را می خواهید یاد بگیرید؟`,
                    btnText: `شروع کنید`
                },
                meetup: {
                    title: `ملاقات`,
                    description: `تبادل تجربیات یادگیری به صورت آفلاین`
                }
            },
            Course: {
                title: `دوره`,
                searchBarBtnText: `پیدا کردن دوره`,
                choiceCourse: {
                    title: `دوره خود را انتخاب کنید`,
                    tabs: {
                        all: `همه`,
                        popular: `محبوب`,
                        new: `جدید`,
                    }
                }
            },
            Search: {
                title: `جستجو`,
                searchBarLabel: `جستجو در دوره ها`,
                results: `نتایج`
            },
            Message: {
                title: `اطلاعیه ها`,
                topTab: {
                    message: `پیام`,
                    notification: `اطلاعیه`
                },
                message: {
                    template: {
                        status: {
                            on: `آنلاین`,
                            off: `آفلاین`
                        }
                    }
                },
                notification: {
                    messages: {
                        0: `خرید موفق!`,
                        1: `تبریک بابت تکمیل...`,
                        2: `دوره شما به روز شده است، شما ...`,
                        3: `تبریک میگم، شما دارید...`,
                    }
                }
            },
            Account: {
                title: `حساب کاربری`,
                favorites: `موارد دلخواه`,
                editAccount: `ویرایش حساب کاربری`,
                settingsAndPrivacy: `تنظیمات و حریم خصوصی`,
                help: `کمک`
            },
            topics: {
                language: `زبان`,
                painting: `نقاشی`,
                coding: `برنامه نویسی`,
                sport: `ورزش`,
                visualIdentity: `هویت بصری`,
                writing: `نویسندگی`,
                editing: `ویراستاری`,
                design: `طراحی`,
                music: `موسیقی`,
                mathematics: `ریاضیات`
            },
            filterPage: {
                title: `فیلتر جستجو`,
                sections: {
                    categories: `دسته بندی ها`,
                    price: `قیمت`,
                    duration: `مدت زمان`
                },
                btns: {
                    clear: `پاک سازی`,
                    applyFilters: `اعمال فیلتر`
                }
            }
        },
        empties: {
            title: "صفحات خالی",
            pages: {
                noNetwork: `بدون شبکه`,
                noVideos: `بدون ویدیو`,
                noProducts: `بدون محصول`,
                noNotifications: `بدون اطلاعیه`
            },
            noNetwork: {
                btnText: `تلاش مجدد`,
                title: `بدون شبکه!`,
                description: `لطفاً اتصال اینترنت خود را بررسی کنید و دوباره امتحان کنید`
            },
            noVideos: {
                btnText: `جستجوی بیشتر`,
                title: `هیچ ویدیویی وجود ندارد!`,
                description: `در حال حاضر ویدیویی که بخواهید وجود ندارد`
            },
            noProducts: {
                title: `هیچ محصولی وجود ندارد`,
                description: `شما هنوز هیچ محصولی ندارید!`
            },
            noNotifications: {
                title: `هنوز هیچ اطلاعیه ای وجود ندارد!`,
                description: `به محض اینکه چیزی برای شما داشته باشیم به شما اطلاع خواهیم داد`
            }
        },
        timeUnits: {
            d: `روز`,
            day: `روز`,
            days: `روزها`,
            h: `ساعت`,
            hour: `ساعت`,
            hours: `ساعت ها`,
            m: `دقیقه`,
            minute: `دقیقه`,
            minutes: `دقیقه ها`,
            s: `ثانیه`,
            second: `ثانیه`,
            seconds: `ثانیه ها`,
        }
    }
}