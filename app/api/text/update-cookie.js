// update-cookie.js

export default function handler(req, res) {
    const { newValue } = req.body;
  
    // Güncellenen çerez değeri ile birlikte layout bileşenine yönlendirme
    res.redirect(`../../layout?newValue=${newValue}`);
  }
  