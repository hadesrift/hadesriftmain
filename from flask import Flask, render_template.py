from flask import Flask, render_template, request, jsonify
import sqlite3
import subprocess

app = Flask(__name__)

# Initialize database
def init_db():
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute('CREATE TABLE IF NOT EXISTS data (content TEXT)')
    conn.commit()
    conn.close()

# Route to render HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Add data to the database
@app.route('/add', methods=['POST'])
def add_data():
    content = request.form['data']
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute('INSERT INTO data (content) VALUES (?)', (content,))
    conn.commit()
    conn.close()
    return "Data added!"

# API to fetch data
@app.route('/data', methods=['GET'])
def get_data():
    conn = sqlite3.connect('data.db')
    c = conn.cursor()
    c.execute('SELECT content FROM data')
    rows = c.fetchall()
    conn.close()
    return jsonify([row[0] for row in rows])

# Run C++ code
@app.route('/run_cpp')
def run_cpp():
    result = subprocess.run(['g++', 'main.cpp', '-o', 'main.out'], capture_output=True, text=True)
    if result.returncode == 0:
        output = subprocess.run(['./main.out'], capture_output=True, text=True)
        return output.stdout
    return "Error in C++ code"

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
