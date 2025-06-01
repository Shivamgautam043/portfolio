
import Header from "../../../components/header"
import { MatrixText } from "../component"

export default function Bookmarks(){

    return(
        <div className="w-full screen">
            <Header/>
            <div>
                Bookmarks
                <div>
                    <MatrixText/>
                </div>
            </div>
        </div>
    )
}