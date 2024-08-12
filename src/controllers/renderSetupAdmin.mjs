export default function renderSetupAdmin(req, res) {
  const error = req.cookies.error;

  if (error == "noAdminUser") {
    res.clearCookie("error");
    res.render("layout.html", {
      title: "Setup Admin",
      page: "setup/admin",
    });
  } else {
    return res.redirect("/");
  }
}
