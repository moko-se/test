const data = [{
    id: 1,
    pseudo: 'Dorian',
    email: 'dorian@doretdevins.com',
    product: 'vins rouge'
}]

const list = document.querySelector('#list');

const pseudo_ = document.createElement('li');
const email_ = document.createElement('li');
const product_ = document.createElement('li');

data.forEach(item => {
    pseudo_.textContent = item.pseudo;
    email_.textContent = item.email;
    product_.textContent = item.product;

    list.appendChild(pseudo_);
    list.appendChild(email_);
    list.appendChild(product_);
})