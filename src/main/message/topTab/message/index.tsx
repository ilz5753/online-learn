import { padding } from "../../../../../common/style";
import { MessageOverview } from "../../../../../components/extra/message/overview";
import { Gap } from "../../../../../components/gap";
import { Layout } from "../../../../../components/layout";
import { ScrollView } from "../../../../../components/scrollview";

export default function Message() {
    return (
        <Layout>
            {Gap({ size: 6.882 })}
            <ScrollView
                {...{
                    style: [padding("h", 22.94)]
                }}
            >
                {Gap({ size: 11.47 })}
                <MessageOverview
                    {...{
                        name: `Bert Pullman`,
                        uri: `https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1357&q=80`,
                        isOnline: true,
                        date: new Date().getTime(),
                        text: `Congratulations on completing the first lesson, keep up the good work!`
                    }}
                />
                {Gap({ size: 11.47 })}
                <MessageOverview
                    {...{
                        name: `Daniel Lawson`,
                        uri: `https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60`,
                        isOnline: true,
                        date: new Date().getTime(),
                        text: `Your course has been updated, you can check the new course in your study course.`,
                        assets: [
                            'https://plus.unsplash.com/premium_photo-1677373562820-d24e2eb0cddd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
                            'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
                            'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                            'https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                        ],
                    }}
                />
                {Gap({ size: 11.47 })}
                <MessageOverview
                    {...{
                        name: `Nguyen`,
                        uri: `https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60`,
                        isOnline: false,
                        date: new Date().getTime(),
                        text: `Congratulations, you have completed your registration! Let's start your learning journey next.`
                    }}
                />
            </ScrollView>
        </Layout>
    )
}