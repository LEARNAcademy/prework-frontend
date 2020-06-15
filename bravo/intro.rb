my_num = [3, 34, 5, 34, 85]
# puts my_num
# print my_num
# p my_num


#
# if answer.to_i >= 20
#   p "#{answer}"
# elsif answer.to_i < 20
#   p "hello"
# else
#   p "error"
# end


puts "enter the answer"
answer = gets.chomp

if answer.downcase == 'learn'
  p 'Hi LEARN!!'
elsif answer.downcase == 'sarah'
  p 'Hi Sarah!'
else
  p "hello, #{answer.capitalize.reverse}!"
end
