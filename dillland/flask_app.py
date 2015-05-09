from flask import Flask, render_template, request
import json

app = Flask(__name__)

project_1_prefix = '/jackdill'
project_2_prefix = '/keentest'

ACTIVE = 1
HIDDEN = -1
INACTIVE = 0

projects =  [{'name':'Dill Land Surveying', 'status': INACTIVE,
               'home': project_1_prefix + '/index.html'},
             {'name': 'Keen Testing', 'status': ACTIVE,
              'home': project_2_prefix + '/index.html'}]

@app.route('/')
def home():
    return render_template('./home/home_home.html')

@app.route(project_1_prefix + '/index.html')
def p1_home():
    return render_template('index.html')

@app.route(project_1_prefix + '/faq.html')
def faq():
    return render_template('faq.html')

@app.route(project_1_prefix + '/contact.html')
def contact():
    return render_template('contact.html')

@app.route(project_1_prefix + '/links')
def links():
    return render_template('links.html')

@app.route('/get/<key_val>', methods=["GET"])
def info(key_val):
    d = { "stephen":"cool man", "others":"not cool man", "magellan":"take it or leave it" }
    return d.get(key_val, "NOT FOUND")

@app.route('/api/get/projects', methods=["GET"])
def get_projects():
    global projects
    return json.dumps(projects)
