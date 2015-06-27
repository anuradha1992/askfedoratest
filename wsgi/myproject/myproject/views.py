from django.shortcuts import render_to_response
from django.template import RequestContext

def index(request):
	return render_to_response('index.html',RequestContext(request))

def main(request):
	return render_to_response('main.html',RequestContext(request))

def qa(request):
	return render_to_response('qa.html',RequestContext(request))