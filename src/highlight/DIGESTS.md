## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-HXa6xmJHMEfHIi/hDPtTbigJQtXSLC1v3Leof82ZGiiIQHcgvyioqE8wgdLm/Mgi /es/languages/accesslog.js
sha384-QqfeezSFk3jFhiaBPAGWdCdQGBdBckwrd9PXxjsb1OObrgikKVL+tcnJYLsSReEH /es/languages/accesslog.min.js
sha384-h+WRl4BTTVy31uw0ZuOybtJsEIlOq2Q4LSWUjK8gKrhdXEqYHP7Qu+MmBIZIqZtO /es/languages/apache.js
sha384-xuOg8cLlaKYVwu8KcJCX2nbs9mrVa7Ngz0c9NQiwViwl408M5TX3w1FC22RHhUuS /es/languages/apache.min.js
sha384-LWvgGWXmngclEsDJmF3D0r9QTsAdIW8nZici4I4If/aw3c6268PitG+PNPAlVMFV /es/languages/csp.js
sha384-h92gzO66Hk1++bH+fXGmNay2Yf9WBsijCsnwubxdSE86gVf6UMC3drQ5VDjZaoaK /es/languages/csp.min.js
sha384-+9dzNYaLHp3OPspFCOJGrEwfiOV3yqeD/atUDYVt9zKUJ8IW2QxffCT2LfmGfwfW /es/languages/css.js
sha384-G44u1/pUATC8754FIKYqkCxCl9AQYnspnFxzuR3RB1YVnTvqOEofqvZNQMUWcY/1 /es/languages/css.min.js
sha384-DmHzDhCE3ltNMxzvFexjBF+ku3PcoAMY7WFOXlWIZnV+vEiPek+T5FVXBuYELEAg /es/languages/graphql.js
sha384-y8dkUR8w2ApytztUtIg+27fJuiL5sH1oq9uRGEcpH9zcoYPU/ZFvroB77kwDE7d6 /es/languages/graphql.min.js
sha384-yIW2CKaxiozMCGVe7a2RX90kdUjP0h2gALuNlfKbojKpQn1OmMQLGO7BOqhncFO6 /es/languages/http.js
sha384-j+2AgmE+4SlZjmviwPvbGypcb9BQNHQj043l9Bb3F2fnlusdNxxA5/INHsOrSE6g /es/languages/http.min.js
sha384-oQpcUGMBf+VDTHOLQ1uhPp1FgNBo0OZc9gbXGuVFwAogHlkh/Iw6cvKKgcgCQkmV /es/languages/javascript.js
sha384-3T8DJ91yCa1//uY9h8Bo4QLrgEtbz4ILN2x9kSM4QWX9/1kKu6UXC3RAbVQV85UQ /es/languages/javascript.min.js
sha384-R87hRh4kF8+iz2sB6FvLrfR0XZBohjFXeJKIXld1Eji2UVi+M2+OIgJKma/9Ko6u /es/languages/json.js
sha384-QFDPNpqtrgZCuAr70TZJFM4VCY+xNnyGKwJw2EsWIBJOVcWAns9PHcLzecyDVv+x /es/languages/json.min.js
sha384-fbxNoZZaPZs3SreGCgzOe8ePQoyxS1dLDpzyq3N5Jyaa0yMu0a2mWHm/EmbtYqi4 /es/languages/lasso.js
sha384-fvrCkD6kUH0Y5flDk5fM43/nR1vGkZ0HzIoNLyT3GQsRZFOy7ZWY7lwwjDS0TV26 /es/languages/lasso.min.js
sha384-BlC0mPZAwpk9QZaocgajHbYH8yYkOUZrDKpeaPBeCGrQfQ6eTZXyInS411HpGnO0 /es/languages/less.js
sha384-vmEaRQjBedDEQk0PmHXdDeC6kbUsP+AhxtGkI2jQ/VdSRZ9ndnDOBUuxp+cZ7pQV /es/languages/less.min.js
sha384-WuxmFqZ8YXr3xyK1Salq5t1q46F/VyzVGx48M2ZJPhbodzQ9L8kfnP/0seU78NsC /es/languages/nginx.js
sha384-XOua+gbAwDawIeMkI2pkXOZH9Xxl9/XLoGuPJD5Bs3WS4bMn207o20s+aQtpsqqE /es/languages/nginx.min.js
sha384-kcAcxYNWYVMr2nwgsILhFHZH+OkRjbK6xazY53sIcW9bta3onTtDBKug0swjsiMC /es/languages/scss.js
sha384-mlx1v98SAsuX2QnqD9+dsXOfilvT7QQjfyOD3HTrvA4TXsxV4yjW/+TqhUADUuOH /es/languages/scss.min.js
sha384-cu+ZTiz+DPlJzlpOCZzjhzj/sZd/xzvbWzjBP9QALEVkQaYwToO+oepMjwImUu+G /es/languages/stylus.js
sha384-p/nPinGn5chrt4cTKyQIBe6+Mq3I9wWfqtxG1zDeE1MFRpZgR5u7OMwne2uePVM2 /es/languages/stylus.min.js
sha384-BcyijKQAe0oJGoEBf0y/+dTJjKiy4bIAVdjreJw+MiOkPgCEjM/2FY2+W7K6tcEZ /es/languages/typescript.js
sha384-Mfjt0R07QBpLXhGWeCetLw7s2mTQSoXmcyYnfsSNq4V4YG3FwayBjxod9MxjSB1x /es/languages/typescript.min.js
sha384-TOvJ6ng9+2cEdYIo8UmcklrWBDxDmcyIc8eZ9tntvTcornli0usS+D1YJKmhMdU5 /es/languages/wasm.js
sha384-tu9x6stUNSb4pXeVRKavZtTp8ha5aQOjCp464ykdPSuI1BMHmN/07U/iqeaoKLgE /es/languages/wasm.min.js
sha384-Tdx2DY9ZTHx3KhVXYqOVKx3q1zOboDGlTTv8sgMlER8y4WETtqL+C4VQ7B4A0OGq /es/languages/xml.js
sha384-n9ZezaAVj8pK1BIFZQxmC1BM9yGuBNRgvsOxHMHPCXzqYd1gSYIu9KjgGEm8K57w /es/languages/xml.min.js
sha384-QwIudrRGaRjbHWFB3wzgyb3kBeHgVQyAuQXB0KuAOKbA0EihX8lqvJzKWP3CVDEo /es/languages/zephir.js
sha384-aWVzxOWmD+p/ZLEDee7zrLBVPmcuxVaxvXqyi25ezJS887Gk3cWf4Z+PUpU1UUsH /es/languages/zephir.min.js
sha384-yuc8tauP3EWSVVc7vXrAEw05ILYmK1tZpwl9pOG2D3aTNCij6+EN7iB45aoFjqXY /languages/accesslog.js
sha384-jSRPpx6rrJge30xNPZiRzm9KMbyWxprw/Are7Y34dZ90vGIUfntrU1T0W+a1RhBq /languages/accesslog.min.js
sha384-CmG/xb1duBmVNCw0Yr7ww0kOxeBU5qY03kVsiLfTX1HDDVs4NiWAL+mx88jxBtao /languages/apache.js
sha384-iUQ9BcUA+p4w9sZAfo8E9iui0Ay0KwBSTIkTLZB8yc3+ExNWmxWMYMLxB1Q1NOZt /languages/apache.min.js
sha384-gf4BcDpEnRsigTWjrncudvt6aXYYJuPqHO28JCgKNG5BtKKPR3YIU7M4X77LG/hG /languages/csp.js
sha384-GfsA+L6x4v9I1iiHCTfElgEMXs4tsXCw+gC+bC89n7nSXfUEfNemTt48EJD4jndY /languages/csp.min.js
sha384-h6xPJgkyvp13tIs697wZHjCH20tW1aJOrvnAKiZZiATSWZp0lyLB4bAdsEhWUSze /languages/css.js
sha384-+MO3D3y/aZzZq7QMAAA5KiuAcqBZivJHFmVUXfwdBoLxEXeGTeQGsNMll4fpnegg /languages/css.min.js
sha384-y4jAHac6QZpx9l3FE/Q9CbTHzEhF8S7+9Hm8AY4PfpSCmQWpPCdW1rBh63nXebrT /languages/graphql.js
sha384-2vKrGN0+i0vPRkMvpEZkOgi35/Vyn5pGG9Oi+baBPODVLjCrGyhQpwDG+BBEEeA3 /languages/graphql.min.js
sha384-5njNAV6cayF+v1sc70/t3BTkztvcp8TZ61d65U8YUQuXJ45PIrhcgNfccRMd9JsI /languages/http.js
sha384-ubRntct0s40ZDtDRLkxA3/xYX51o5yC2U8SKlky8dhIRsjSnvZiUKLhz0gNTewno /languages/http.min.js
sha384-p/utwvqrRVOLlz0BjJ0BCGCb2liTDipfz47/QmGXz9hoPIjCKYEgmYUC30VmGgZy /languages/javascript.js
sha384-L/XmDiyusXomLRGcRmcBpPlboRFjpQNV747OJvg+sEOpgGYvUsNwcC4JLNQ2dI6O /languages/javascript.min.js
sha384-psmmPlbfEWGyvRapexDqkVTgNz7Y1xvlGdLNWQSafI4GFQYFDXPZxVXH1laU4n6l /languages/json.js
sha384-Bb6DhE3tUpBROwypL78TbhRUs9QbCt2GxcxVSYglt2l3MefrYkm4CfwjfWhRfQaX /languages/json.min.js
sha384-aNmKczzJD13MpG2aKYbenAC+a+jA0fxshAjIYNe8t4XIMS45jywxS3icPET1k0jt /languages/lasso.js
sha384-ZZRcOijvFcSYDPwKpgTEOGSm+Ww/Dmj2lwxelFyQsl4U7MHHlYDt5vEyCdo82FhG /languages/lasso.min.js
sha384-zlcx7qQtpp4cqCCPEDhWKvb3lEbhomD5HTubdLR78S/3AQBJGkHiT6LGziV0f4yH /languages/less.js
sha384-NZS9QHMmwN86GbNpIvGs4HOB2EzfqPjhIHqZviwZIw1HLumSMRnl4X/OIgpyP0+K /languages/less.min.js
sha384-GqxuhQ5X9X3c8nNswtucj7gX9fAuYCtI73NbFLXAYNqX39+zocekxv7SOK6oVGhi /languages/nginx.js
sha384-TG8jUbt29ktiHxVaCkA6FLnJkL/PYG3zQwEYexdbr+Z6mMkFf+c0ONpHyuIY4vvG /languages/nginx.min.js
sha384-1MNX8RDXroN7D+Jeq9f6EysUNAuhuQMq32wKcGB5yEDEJalUxEoSjfRVJhF0+YV6 /languages/scss.js
sha384-7CdPzO1jMDolQK+LCRlGiW1Oka6fSiQdIiqfTvHeBk2Hm2iYNoqMn60aJ9HdKkjb /languages/scss.min.js
sha384-0Yy/cZlbG78zeysOAMDd9OMKj8FrGaVfg/IH9zKh0JCBGMW0gabvTIAtdif4HpSh /languages/stylus.js
sha384-MoaYmkURrT/giCrgWXgBEOOXP+nEFtMKjRY2XIzWehdGT2GN73w+dTvyP+jZhEZL /languages/stylus.min.js
sha384-4q0Mj1AHSvVdgi6nXDGdkiHZQcme/PcCE+MvwCvnAIZSjhJfk3UpjJU2nn2eImWz /languages/typescript.js
sha384-rfwxAwuWzb2XdSU7HN3IhrSyCq96Nj4p1ZYPCNAGbqtnPsaWl8d5eSypxPbW6alT /languages/typescript.min.js
sha384-7+RHZQJsgiohPfYs4xGnVLR6bKm1cnz7rvB7mXEb2btmiWhSNq1cuTJsQWK9Ut8w /languages/wasm.js
sha384-TTxGby06lDIEB1Y6l2/Hd2VJbewWQSCESXUcDWC24gJN0IiptruI6DE1l5+w4Qzh /languages/wasm.min.js
sha384-QAL2h4IMgQaJUJjUy0dSWdAut7o/A272ai8qOsJ8SSm9KMxkdLgH7oGfLGft/EJ0 /languages/xml.js
sha384-CN3No+n1UZXCFYyl+ge5yAPGTNGuH23BdIsFJxntDmEYL94AmoZlNBHGSdjVSjKG /languages/xml.min.js
sha384-iw5vfj3aLmmBI0eTXaW58+7oltnHpXTNTSuYj5icFfnsSPIOWXhhIJ54PHmXduA8 /languages/zephir.js
sha384-7A2HawNmptSPS479EB34q/+e8WPft+1zFF1OETV5ZYY/JzzUkfkkqXxng6jV4wB8 /languages/zephir.min.js
sha384-ogKMHq69bx6s4AYdmFSEtpQiSbv8A2RxbLT/CZDzFKuTBexcbN1aHIwin5zSMmu7 /highlight.js
sha384-yPfBtOmxQAQ1Bye+bGchT99CgS0BbUapimoI7VcmUNP2qUE63BdtxliLBDs8neB0 /highlight.min.js
```

