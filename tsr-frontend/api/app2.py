# Code 3
import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin

import logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')

UPLOAD_FOLDER = './Temp'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)

# Cors
config = {
  'ORIGINS': [
    'http://localhost:5000',  # React
    'http://127.0.0.1:5000',  # React
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ]
}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/uploadimages', methods=['GET','POST'])
def fileUpload():
    target=os.path.join(UPLOAD_FOLDER,'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file'] 
    filename = secure_filename(file.filename)
    destination="/".join([target, filename])
    file.save(destination)
    session['uploadFilePath']=destination
    response= "this is a string"
    return response

CORS(app, resources={ r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)

if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True,use_reloader=False)

flask_cors.CORS(app, expose_headers='Authorization')


#code 2

# import os
# from flask import Flask, flash, request, redirect, render_template
# from werkzeug.utils import secure_filename
# from flask_cors import CORS

# app = Flask(__name__)


# # Cors
# config = {
#   'ORIGINS': [
#     'http://localhost:5000',  # React
#     'http://127.0.0.1:5000',  # React
#     'http://localhost:3000',
#     'http://127.0.0.1:3000',
#   ]
# }

# app.secret_key = "secret key"
# # app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

# # Get current path
# # path = os.getcwd()
# path = './Temp'
# # file Upload
# UPLOAD_FOLDER = os.path.join(path, 'test-docs')

# # Make directory if uploads is not exists
# if not os.path.isdir(UPLOAD_FOLDER):
#     os.mkdir(UPLOAD_FOLDER)

# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# # Allowed extension you can set your own
# ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])


# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# # @app.route('/')
# # def upload_form():
# #     return render_template('upload.html')


# @app.route('/uploadimages', methods=['GET','POST'])
# def upload_file():
#     if request.method == 'POST':
#         print(request.form)
#         if 'file' not in request.files:
#             flash('No file part')
#             return redirect(request.url)

#         # files = request.files.getlist('file')
#         files = request.files['file'] 

#         for file in files:
#             if file and allowed_file(file.filename):
#                 filename = secure_filename(file.filename)
#                 file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

#         flash('File(s) successfully uploaded')
#         # return redirect('/')
#         response= "this is a string"
#         return response

# CORS(app, resources={ r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)

# if __name__ == "__main__":
#     app.run(host='127.0.0.1',port=5000,debug=False,threaded=True)

# # flask_cors.CORS(app, expose_headers='Authorization')

# code 1

# # from flask import Flask, render_template, request
# # app = Flask(__name__)

# # wsgi_app = app.wsgi_app

# # @app.route('/', methods=['GET','POST'])
# # def hello():
# #     if request.method=="POST":
# #         file = request.files['file']
# #         file.save(os.path.join("uploads",file.filename))
# #         return render_template("index.html",message="upload")
# #     return render_template("index.html", messafe="upload")    

# # if __name__ == "__main__":
# #     import os
# #     HOST = os.environ.get('SERVER_HOST', 'localhost') 
# #     try:
# #         PORT= int(os.environ.get('SERVER_POST','5000'))
# #     except ValueError:
# #         PORT = 5000
# #     app.run(HOST,PORT)
# # from flask import Flask, render_template, request, jsonify
# # from flask_cors import CORS

# # app = Flask(__name__)


# # # Cors
# # config = {
# #   'ORIGINS': [
# #     'http://localhost:5000',  # React
# #     'http://127.0.0.1:5000',  # React
# #     'http://localhost:3000',
# #     'http://127.0.0.1:3000',
# #   ],

# #   'SECRET_KEY': '...'
# # }


# # @app.route('/uploadimages',methods=["GET", "POST"])
# # def uploadimages():
# #     if request.method == 'POST':
# #         # data = request.files.getlist("file[]")
# #         # data = request.files
# #         # data = request.json
# #         jsonData = request.get_json()
# #         # print(jsonData['name'])
# #         print(request.form)
# #         # print(request.files)
# #         # print(jsonData)
# #         return jsonify(jsonData)
# #     #     data = request.get_json()
# #     #     return "JSON received!", 200
# #     else:
# #     #     # The request body wasn't JSON so return a 400 HTTP status code
# #         return "Request was not JSON", 400


# # CORS(app, resources={ r'/*': {'origins': config['ORIGINS']}}, supports_credentials=True)

# # app.run(debug=True)