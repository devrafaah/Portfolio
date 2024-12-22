$(document).ready(function () {
    // Detecta a mudança no seletor de idiomas
    $('#languageSelect').on('change', function () {
      var selectedLang = $(this).val(); // Obtém o idioma selecionado (PT, EN, ES)

      //MENU TOP-BAR
      // Atualiza os textos do menu com base no idioma
      $('#item_home_menu').text(translations[selectedLang].item_home_menu);
      $('#item_about_menu').text(translations[selectedLang].item_about_menu);
      $('#item_skills_menu').text(translations[selectedLang].item_skills_menu);
      $('#items_portfolio_menu').text(translations[selectedLang].items_portfolio_menu);

      // Atualiza os textos da página com base no idioma
      // Home
      $('#title_h').text(translations[selectedLang].title_h);
      $('#description_h').text(translations[selectedLang].description_h);
      $('#github_h span').text(translations[selectedLang].github_h);
      $('#linkedin_h span').text(translations[selectedLang].linkedin_h);

      // SOBRE
      $('#title_s').text(translations[selectedLang].title_s);
      $('#description_s').text(translations[selectedLang].description_s);
      $('#skills_s').text(translations[selectedLang].skills_s);

      // Detalhes da seção Sobre
      $('#details_11_s').text(translations[selectedLang].details_11_s);
      $('#detail_1_s').text(translations[selectedLang].detail_1_s);
      $('#details_22_s').text(translations[selectedLang].details_22_s);
      $('#detail_2_s').text(translations[selectedLang].detail_2_s);
      $('#details_33_s').text(translations[selectedLang].details_33_s);
      $('#detail_3_s').text(translations[selectedLang].detail_3_s);
      $('#details_44_s').text(translations[selectedLang].details_44_s);
      $('#detail_4_s').text(translations[selectedLang].detail_4_s);


      // Atualiza os textos dos cursos com base no idioma
      $('#title_c_1').text(translations[selectedLang].title_c_1);
      $('#time_c_1').text(translations[selectedLang].time_c_1);
      $('#description_c_1').text(translations[selectedLang].description_c_1);

      $('#title_c_2').text(translations[selectedLang].title_c_2);
      $('#time_c_2').text(translations[selectedLang].time_c_2);
      $('#description_c_2').text(translations[selectedLang].description_c_2);

      $('#title_c_3').text(translations[selectedLang].title_c_3);
      $('#time_c_3').text(translations[selectedLang].time_c_3);
      $('#description_c_3').text(translations[selectedLang].description_c_3);

      // Atualiza a citação com base no idioma
      $('#citation').text(translations[selectedLang].citation);


      // Atualiza os textos da seção Projetos com base no idioma
      $('#title_p').text(translations[selectedLang].title_p);
      $('#subtitle_p').text(translations[selectedLang].subtitle_p);
      $('#description_p_1').text(translations[selectedLang].description_p_1);
      $('#button_p_1').text(translations[selectedLang].button_p_1);
      $('#description_p_2').text(translations[selectedLang].description_p_2);
      $('#description_p_3').text(translations[selectedLang].description_p_3);
    });
  });