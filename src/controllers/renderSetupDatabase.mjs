
import fs from "fs";
import path from "path";

export default function renderSetupDatabase(req, res){  
    const error = req.cookies.error;

    const envPath = path.resolve(".env");

    // Ser o envPath existir e o error for diferente então redirecione
    if(fs.existsSync(envPath) && error != "errorConnectionDB"){
        return res.redirect("/")
    }

    res.clearCookie('error')
    res.render('layout.html', {
        title: 'Setup Database',
        page: 'setup/database'
    });
}

