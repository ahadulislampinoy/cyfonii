import Link from "next/link"


export default function Create1() {
    return (
        <>
            <section className="create">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="create__main">
                                <div className="content">
                                    <h4 className="heading">Create your NFT portfolio</h4>
                                    <p>Get udpated with news, tips &amp; tricks</p>
                                    <Link href="#" className="action-btn"><span>App Store</span></Link><Link href="#" className="action-btn"><span>Google Pay</span></Link>
                                </div>
                                <img id="site-logo" src="/assets/images/logo/logo.png" alt="Peson" width={550} height={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
