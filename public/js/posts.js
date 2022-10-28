$(document).on('click', '.post', function() {

    var title=$(".heading").val();
    var content=$(".body").val();

    uploadData={
      "title":title,
      "content":content
    }
        
    fetch('/api/posts', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

})