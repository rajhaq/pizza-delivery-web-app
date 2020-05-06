<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Zero-Pizza') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <style>
    .no-js #loader { display: none;  }
.js #loader { display: block; position: absolute; left: 100px; top: 0; }
#se-pre-con {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url(/Preloader_2.gif) center no-repeat #fff;
}</style>
    <script>

    
        (function () {
            window.Laravel = {
                csrfToken: '{{ csrf_token() }}'
            };
            @if(Auth::check())
                window.authUser={!! Auth::user() !!}
                @else
                window.authUser=false
                @endif
        })();
        </script>

    <!-- Styles -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->
</head>
<body>     
<div id="se-pre-con"></div>   
    @yield('content')
    <script>
    window.addEventListener('load', function() {
        var s = document.getElementById('se-pre-con').style;
        s.opacity = 1;
        (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,40)})();
            // $(".se-pre-con").fadeOut("slow");
        })

</script>
</body>
</html>
