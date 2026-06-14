from flask import Flask ,render_template,jsonify,request
import sqlite3
app = Flask(__name__)
@app.route('/')
def home():
  return render_template('ht.html')

@app.route('/book', methods=['POST'])
def book():
    data = request.json
    name = data['name']
    email = data['email']
    phone = data['phone']
    date = data ['date']
    con = sqlite3.connect('bookings.db')
    con.cursor().execute(' INSERT INTO bookings(name,email,phone,date) VALUES (?,?,?,?)',(name,email,phone,date))
    con.commit()
    con.close()

    return jsonify ({"message":"booking received"})

def init_db():
  con = sqlite3.connect('bookings.db')
  con.cursor().execute("create table if not exists bookings (id integer primary key autoincrement,name text not null, email text not null, phone integer not null, date text not null)")
  con.commit()
  con.close()

init_db()

if __name__ == '__main__':
  app.run(debug=True)