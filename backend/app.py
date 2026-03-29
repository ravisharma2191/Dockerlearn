from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask Backend Running ✅"

@app.route("/process", methods=["GET", "POST"])   
def process():
    if request.method == "POST":
        name = request.form.get("name")
        age = request.form.get("age")
    else:
        name = request.args.get("name")
        age = request.args.get("age")

    return f"Hello {name}, you are {age} years old!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)