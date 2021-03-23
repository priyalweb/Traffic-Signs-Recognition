from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/uploadimages',methods=["GET", "POST"])
def uploadimages():
    if request.method == 'POST':
        data = request.files.getlist("file[]")
        # data = request.json
        print(data)
        return jsonify(data)
    #     data = request.get_json()
    #     return "JSON received!", 200
    else:
    #     # The request body wasn't JSON so return a 400 HTTP status code
        return "Request was not JSON", 400

app.run(debug=True)