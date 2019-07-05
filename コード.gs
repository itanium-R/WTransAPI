function doGet(e) {
  var p = e.parameter;
  translatedText   = LanguageApp.translate(p.text        , p.fromLang, p.toLang),
  retranslatedText = LanguageApp.translate(translatedText, p.toLang  , p.fromLang);

  var content={
    "translatedText"   : translatedText,
    "retranslatedText" : retranslatedText
  };
  
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify(content));
  
  return output;
}