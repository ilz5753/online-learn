import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Gap } from "../../../../components/gap";
import { Layout } from "../../../../components/layout";

export default function EditAccount() {
    let insets = useSafeAreaInsets()
    return (
        <Layout>
            {Gap({ size: insets.top })}
        </Layout>
    )
}