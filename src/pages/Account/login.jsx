export default function Login (){
    return(
        <>
        <div className="signup">
            <div>
                <h1>Login to your Quickly Account </h1>
            </div>
            <div>
                <form action="" method="post">
                    <div>
                        <label htmlFor="">Email Address</label>
                        <input type="email" placeholder="Enter Email Address" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter Password" />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}