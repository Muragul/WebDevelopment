from django.shortcuts import render
from api.models import Product, Category
from django.http import HttpResponse, Http404, JsonResponse


def get_all_products(request):
    try:
        products = Product.objects.all()
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_product(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        return JsonResponse(product.to_json())
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_all_categories(request):
    try:
        categories = Category.objects.all()
        categories_json = [c.to_json() for c in categories]
        return JsonResponse(categories_json, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_category(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
        return JsonResponse(category.to_json())
    except Exception as e:
        return JsonResponse({'error': str(e)})


def get_products_from_category(request, category_id):
    try:
        products = Product.objects.filter(category_id=category_id)
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)})
