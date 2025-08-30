export default {
  route: '/thank-you',
  title: 'Thank You',
  description: 'Thank You - Compliance-Automatisierung mit KI. Marsstein GmbH.',
  content: `
    <>
      
      <div class="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center px-4">
      <div class="max-w-2xl mx-auto text-center">
        <Card class="shadow-lg">
          <CardHeader class="pb-4">
            <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle class="w-8 h-8 text-green-600" ></CheckCircle>
            </div>
            <CardTitle class="text-3xl font-bold text-foreground mb-2">
              
            </CardTitle>
            <p class="text-lg text-muted-foreground">
              
            </p>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="bg-muted/50 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-foreground mb-2">
                
              </h3>
              <ul class="text-left space-y-2 text-muted-foreground">
                <li class="flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-green-600 flex-shrink-0" ></CheckCircle>
                  
                </li>
                <li class="flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-green-600 flex-shrink-0" ></CheckCircle>
                  
                </li>
                <li class="flex items-center gap-2">
                  <CheckCircle class="w-4 h-4 text-green-600 flex-shrink-0" ></CheckCircle>
                  
                </li>
              </ul>
            </div>

            <div class="border-t pt-6">
              <h3 class="text-xl font-semibold text-foreground mb-4">
                
              </h3>
              <p class="text-muted-foreground mb-6">
                
              </p>
              
              <div>
                <Link>
                  <Button>
                    <Monitor class="w-5 h-5 mr-2" ></Monitor>
                    
                    <ArrowRight class="w-4 h-4 ml-2" ></ArrowRight>
                  </Button>
                </Link>
                
                <Link>
                  <Button variant="outline" size="lg" class="w-full">
                    <Home class="w-5 h-5 mr-2" ></Home>
                    
                  </Button>
                </Link>
              </div>
            </div>

            <div class="bg-primary/5 rounded-lg p-4 text-sm text-muted-foreground">
              <p>
                <strong>:</strong><br />
                📧 contact@marsstein.com<br />
                📞 +41 44 123 45 67<br />
                🕒 
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>`
};