
export default function renderHome(req, res){
    res.render('layout.html', {
        title: 'home',
        page: 'home/home'
    });
}
