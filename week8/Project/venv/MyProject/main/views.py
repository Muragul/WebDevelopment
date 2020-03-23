from django.http.response import HttpResponse, JsonResponse


def hello(request):
    return HttpResponse('<h1>hello msg</h1>')

products = [
    {
        'id': i,
        'name': f'product {i}',
        'price': i * 1000
    } for i in range(1, 5)
]


def product_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, product_id):
    for p in products:
        if p['id']==product_id:
            return JsonResponse(p)
    return JsonResponse({'error': 'does not exist'})
