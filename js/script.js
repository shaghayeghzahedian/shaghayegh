$(document).ready(function () {
	var imgItems = $('.slider li').length;
	var imgPos = 1;

	for (i = 1; i <= imgItems; i++) {
		$('.pagination').append('<li><span class="fas fa-circle"></span></li>');
	}

	$('.slider li').hide();
	$('.slider li:first').show();
	$('.pagination li:first').css({ color: '#cd6e2e' });

	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	setInterval(function () {
		nextSlider();
	}, 4000);

	function pagination() {
		var paginationPos = $(this).index() + 1;

		$('.slider li').hide();
		$('.slider li:nth-child(' + paginationPos + ')').fadeIn();

		$('.pagination li').css({ color: '#858585' });
		$(this).css({ color: '#cd6e2e' });

		imgPos = paginationPos;
	}

	function nextSlider() {
		if (imgPos >= imgItems) {
			imgPos = 1;
		} else {
			imgPos++;
		}

		$('.pagination li').css({ color: '#858585' });
		$('.pagination li:nth-child(' + imgPos + ')').css({ color: '#cd6e2e' });

		$('.slider li').hide();
		$('.slider li:nth-child(' + imgPos + ')').fadeIn();
	}

	function prevSlider() {
		if (imgPos <= 1) {
			imgPos = imgItems;
		} else {
			imgPos--;
		}

		$('.pagination li').css({ color: '#858585' });
		$('.pagination li:nth-child(' + imgPos + ')').css({ color: '#cd6e2e' });

		$('.slider li').hide();
		$('.slider li:nth-child(' + imgPos + ')').fadeIn();
	}
	let productSample = [
		{
			title:
				'تردمیل برند پروفورم امریکا',
			price: '$30,000,000',
			img: (src = '../image/IMG-20200919-WA0042.jpg'),
		},
		{
			title:'تردمیل ترک',
			price: '$33,300,000',
			img: (src = '../image/IMG-20200919-WA0044.jpg'),
		},
		{
			title:
				'تردمیل باشگاهی  برند نردیک ترک ',
			price: '$71,3s00,000',
			img: (src = '../image/IMG-20200919-WA0057.jpg'),
		},
		{
			title: 'دستگاه 36 کاره',
			price: '$47,000,000',
			img: (src = '../image/IMG-20200919-WA0049.jpg'),
		},
		{
			title: 'دستگاه 28کاره',
			price: '$38,000,000',
			img: (src = '../image/IMG-20200919-WA0052.jpg'),
		},
		{
			title: 'دستگاه 21کاره',
			price: '$24,000,000',
			img: (src = '../image/IMG-20200919-WA0053.jpg'),
		},
		{
			title: 'اسپینینگ اسپرت,تمام اپشن,تحمل وزن200k',
			price: '$30,626,000',
			img: (src = '../image/IMG-20200919-WA0043.jpg'),
		},
		{
			title: 'کراس فیتنس مدل monster,تحمل وزن ۱۵۰k',
			price: '$28,060,000',
			img: (src = '../image/IMG-20200919-WA0048.jpg'),
		},
		{
			title: 'رويینگ باشگاهی',
			price: '$26,880,000',
			img: (src = '../image/IMG-20200919-WA0058.jpg'),
		},
	];
	let list = document.getElementById('productSample');

	for (const i in productSample) {
		let div = document.createElement('div');
		let h3tag = document.createElement('h3');
		let ptag = document.createElement('p');
		let img = document.createElement('img');

		h3tag.setAttribute('class', 'h3tag');
		ptag.setAttribute('class', 'ptag');
		img.setAttribute('class', 'img');

		h3tag.innerHTML = productSample[i].title;
		ptag.innerHTML = productSample[i].price;
		img.setAttribute('src', productSample[i].img);

		div.appendChild(h3tag);
		div.appendChild(ptag);
		div.appendChild(img);
		list.appendChild(div);
	}
});
