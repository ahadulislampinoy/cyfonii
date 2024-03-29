import Link from "next/link"
import ProjectSlider1 from "../slider/ProjectSlider1"


export default function Project1() {
    return (
        <>
            <section className="project">
                <div className="shape right" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Presale</span></h6>
                                <h3 className="heading wow" data-splitting>The presale is divided into 7 phases</h3>
                            </div>
                            <div>
                               <ProjectSlider1/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
