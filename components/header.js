import Link from "next/link"

export default function Header({ children, header }) {
    return (
        <div className="row" style={{ background: "#F1F2FA" }}>
            <div className="col-md-4 text-center p-2">
                <Link href={'/'}>
                    <a  className="btn btn-outline-warning btn-radius">
                        {" "}
                        Select Country{" "}
                    </a>
                </Link>  
            </div>
            <div className="col-md-4 text-center  p-2">
                <Link href={'/'}>
                    <a  className="btn btn-outline-secondary btn-radius">
                        {" "}
                        Bangladesh{" "}
                    </a>
                </Link> 
            </div>
            <div className="col-md-4 text-center  p-2">
                <Link href={'/'}>
                    <a className="btn btn-outline-primary btn-radius">
                    Login
                    </a>
                </Link> 
            

            <Link href={'/'}>
                <a
                    href="registration.html"
                    className="btn btn-outline-success btn-radius"
                >
                    Register
                </a>
            </Link> 
            
            </div>
        </div>
    )
  }