const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki">
    
    <div class="form-group">
      <label for="authorName" class="col-sm-2 control-label">Author's Name</label>
      <div class="col-sm-10">
        <input id="authorName" name="authorName" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="authorEmail" class="col-sm-2 control-label">Author's Email</label>
      <div class="col-sm-10">
        <input id="authorEmail" name="authorEmail" type="email" class="form-control"/>
      </div>
    </div>

    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea id="content" name="content" class="form-control" rows="15"></textarea>
      </div>
    </div>
    
    <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="status" name="status" type="text" class="form-control"/>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);