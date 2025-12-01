import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { z } from "zod";


export default function SignInScreen() {
  const userSchema = z.object({
      email: z.string().email({ message: "Please enter a valid email address." }),
      pwd: z.string().min(7, { message: "Password has to be over 6 characters long." }),
    });

  type UserFormType = z.infer<typeof userSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserFormType> = (data: UserFormType) => {
      console.log(data);
    };

  return (
    <View style={styles.body}>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
            <TextInput
              mode="outlined"
              label="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              activeOutlineColor={error ? "red" : "black"}
              style={styles.input}
            />
        )}
        name="username"
      />
      {errors.username && (
        <Text style={{ color: "#ff8566" }}>{errors.username.message}</Text>
      )}

      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            mode="outlined"
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            activeOutlineColor={error ? "#FF586B" : "#090932"}
            style={styles.input}
          />
        )}
        name="pwd"
      />
      {errors.pwd && (
        <Text style={{ color: "#ff8566" }}>{errors.pwd.message}</Text>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#090932',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    color: 'white'
  },
  input: {
    color: 'white',
    width: '85%',
    marginBottom: '1%'
  },
});
